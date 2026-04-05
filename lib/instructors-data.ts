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
    bio: "20+ years of grappling experience. Wrestled folkstyle for Rome High (2007-2011) & Duke University (2011-2016). Debuted as a professional submission grappler in 2021",
    specialty: "Brazilian Jiu-Jitsu, Submission Wrestling",
    initials: "RR",
  },
  {
    id: "matt-hugh-boiles",
    name: "Matt Hugh Boiles",
    title: "Instructor",
    bio: "Exciting professional grappler specializes in sports grappling development.",
    specialty: "Competition Training, Competitive Meta Analyis",
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
