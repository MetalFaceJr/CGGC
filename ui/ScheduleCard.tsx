import { ScheduleDay } from "@/lib/schedule-data";

export default function ScheduleCard({ day }: { day: ScheduleDay }) {
  return (
    <div className="bg-dark-surface border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition">
      <h3 className="text-2xl font-bold text-primary mb-2">{day.day}</h3>
      <p className="text-light-text/60 text-sm mb-4">{day.date}</p>

      <div className="space-y-3">
        {day.classes.map((cls, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start pb-3 border-b border-primary/10 last:border-b-0"
          >
            <div>
              <p className="font-semibold text-light-text">{cls.ageGroup}</p>
              <p className="text-sm text-light-text/70">
                {cls.time} - {cls.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
