export interface ScheduleClass {
  ageGroup: string;
  time: string;
  duration: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  classes: ScheduleClass[];
}

export const scheduleData: ScheduleDay[] = [
  {
    day: "Wednesday",
    date: "5:00pm - 9:00pm",
    classes: [
      {
        ageGroup: "Little Kids (5yo-8yo)",
        time: "5:00pm",
        duration: "5:45pm",
      },
      {
        ageGroup: "Big Kids",
        time: "6:30pm",
        duration: "7:15pm",
      },
      {
        ageGroup: "Adults",
        time: "7:15pm",
        duration: "8:00pm",
      },
      {
        ageGroup: "Optional Live Training",
        time: "8:00pm",
        duration: "9:00pm",
      },
    ],
  },
  {
    day: "Friday",
    date: "5:00pm - 9:00pm",
    classes: [
      {
        ageGroup: "Little Kids (5yo-8yo)",
        time: "5:00pm",
        duration: "5:45pm",
      },
      {
        ageGroup: "Big Kids",
        time: "6:30pm",
        duration: "7:15pm",
      },
      {
        ageGroup: "Adults",
        time: "7:15pm",
        duration: "8:00pm",
      },
      {
        ageGroup: "Optional Live Training",
        time: "8:00pm",
        duration: "9:00pm",
      },
    ],
  },
  {
    day: "Saturday",
    date: "9:00am - 11:30am",
    classes: [
      {
        ageGroup: "Kids Competition Class",
        time: "9:00am",
        duration: "9:45am",
      },
      {
        ageGroup: "Adults",
        time: "9:45am",
        duration: "10:30am",
      },
      {
        ageGroup: "Optional Live Training",
        time: "10:30am",
        duration: "11:30am",
      },
    ],
  },
];
