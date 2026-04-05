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
        ageGroup: "Kids I (5-8 Years-Old)",
        time: "5:00pm",
        duration: "5:45pm",
      },
      {
        ageGroup: "Kids II (8 Years-Old & Up)",
        time: "6:30pm",
        duration: "7:15pm",
      },
      {
        ageGroup: "Adults (Instruction)",
        time: "7:15pm",
        duration: "8:00pm",
      },
      {
        ageGroup: "Open Training",
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
        ageGroup: "Kids I (5-8 Years-Old)",
        time: "5:00pm",
        duration: "5:45pm",
      },
      {
        ageGroup: "Kids II (8 Years-Old & Up)",
        time: "6:30pm",
        duration: "7:15pm",
      },
      {
        ageGroup: "Adults (Instruction)",
        time: "7:15pm",
        duration: "8:00pm",
      },
      {
        ageGroup: "Open Training",
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
        ageGroup: "Adults (Instruction)",
        time: "9:45am",
        duration: "10:30am",
      },
      {
        ageGroup: "Open Training",
        time: "10:30am",
        duration: "11:30am",
      },
    ],
  },
];
