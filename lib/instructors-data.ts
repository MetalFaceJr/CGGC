export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialty: string;
  initials: string;
}

export const instructorsData: Instructor[] = [
  {
    id: "randy-roden",
    name: "Randy Roden",
    title: "Head Instructor",
    bio: "Over 15 years of competitive grappling experience. Dedicated to distilling grappling to the ideal "effective:efficient" ratio.",
    specialty: "Brazilian Jiu-Jitsu, Submission Wrestling",
    initials: "RR",
  },
  {
    id: "brayan-reyes",
    name: "Brayan Reyes",
    title: "Instructor",
    bio: "Experienced grappler with expertise in both Gi and No-Gi techniques. Passionate about developing young athletes.",
    specialty: "Japanese Jiu Jistu, Practical Self-Defense",
    initials: "BR",
  },
  {
    id: "matt-hugh-boiles",
    name: "Matt Hugh Boiles",
    title: "Instructor",
    bio: "Specializes in fundamentals and technique refinement. Known for creating a welcoming environment for beginners.",
    specialty: "Gi Fundamentals, Competition Training",
    initials: "MH",
  },
  {
    id: "will-jordan",
    name: "Will Jordan",
    title: "Assistant Kid's Coach",
    bio: "Dedicated to building confidence and discipline in young grapplers. Creates fun, engaging class environments.",
    specialty: "Youth Programs, Kids Coaching",
    initials: "WJ",
  },
];
