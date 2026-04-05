const CAL_API_KEY = process.env.CAL_API_KEY ?? "";
const CAL_BASE_URL = "https://api.cal.com/v2";
const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL ?? "";

const CLASS_TIME_MAP: Record<string, { hour: number; minute: number }> = {
  "5:00pm":  { hour: 17, minute: 0 },
  "6:30pm":  { hour: 18, minute: 30 },
  "7:15pm":  { hour: 19, minute: 15 },
  "9:00am":  { hour: 9,  minute: 0 },
  "9:45am":  { hour: 9,  minute: 45 },
};

const DAY_INDEX: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

function nextOccurrence(dayName: string, hour: number, minute: number): Date {
  const TZ = "America/New_York";
  const targetDay = DAY_INDEX[dayName];

  // Work in Eastern time so class hours mean what the schedule says
  const nowET = new Date(new Date().toLocaleString("en-US", { timeZone: TZ }));
  const candidate = new Date(nowET);
  candidate.setHours(hour, minute, 0, 0);

  let delta = (targetDay - nowET.getDay() + 7) % 7;
  if (delta === 0 && candidate <= nowET) delta = 7;
  candidate.setDate(candidate.getDate() + delta);

  // Convert the Eastern wall-clock time to a real UTC Date
  const etString = candidate.toLocaleString("en-US", { timeZone: TZ });
  const etDate = new Date(etString);
  const offsetMs = candidate.getTime() - etDate.getTime();
  return new Date(candidate.getTime() + offsetMs);
}

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    phone?: string;
    preferredDay?: string;
    classTime?: string;
  };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, phone, preferredDay, classTime } = body;

  if (!name || !email || !phone || !preferredDay || !classTime) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!(classTime in CLASS_TIME_MAP)) {
    return Response.json({ error: "Invalid class time" }, { status: 400 });
  }

  // --- Step 1: Cal.com event type ID (trial class) ---
  const eventTypeId = 5240972;

  // --- Step 2: Create Cal.com booking ---
  const { hour, minute } = CLASS_TIME_MAP[classTime];
  const start = nextOccurrence(preferredDay, hour, minute);

  let calEventId: string | undefined;
  try {
    const bookRes = await fetch(`${CAL_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CAL_API_KEY}`,
        "Content-Type": "application/json",
        "cal-api-version": "2024-08-13",
      },
      body: JSON.stringify({
        eventTypeId,
        start: start.toISOString(),
        attendee: {
          name,
          email,
          timeZone: "America/New_York",
          phoneNumber: phone,
        },
        metadata: { preferredDay, classTime },
      }),
    });

    const bookData = await bookRes.json();
    if (!bookRes.ok) {
      throw new Error(bookData?.message ?? `Cal.com booking failed: ${bookRes.status}`);
    }
    calEventId = bookData?.data?.uid as string | undefined;
  } catch (err) {
    console.error("[trial-booking] Cal.com booking failed:", err);
    return Response.json(
      { error: "Failed to create booking. Please call us directly at (706) 629-7367." },
      { status: 502 }
    );
  }

  // --- Step 3: Log to Google Sheet via Apps Script (non-blocking) ---
  if (APPS_SCRIPT_URL) {
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        phone,
        preferredDay,
        classTime,
        calEventId: calEventId ?? "",
      }),
    }).catch((err) => console.error("[trial-booking] Google Sheets log failed:", err));
  } else {
    console.warn("[trial-booking] GOOGLE_APPS_SCRIPT_URL not set — skipping Sheets log");
  }

  return Response.json({ success: true, bookingId: calEventId });
}
