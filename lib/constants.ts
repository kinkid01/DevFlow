export interface EventItems {
  image: string;
  title: string;
  slug: string;
  location: string;
  time: string;
  date: string;
}

export const events: EventItems[] = [
  {
    image: "/images/eventOne.png",
    title: "Frontend Lagos Meetup",
    slug: "frontend-lagos-meetup",
    location: "Lagos, Nigeria",
    time: "10:00 AM",
    date: "Oct 12, 2026",
  },
  {
    image: "/images/eventTwo.png",
    title: "React & Next.js Conference",
    slug: "react-nextjs-conference",
    location: "Abuja, Nigeria",
    time: "9:00 AM",
    date: "Oct 18, 2026",
  },
  {
    image: "/images/eventThree.png",
    title: "Building Scalable APIs with Node.js",
    slug: "building-scalable-apis-nodejs",
    location: "Online",
    time: "2:00 PM",
    date: "Oct 24, 2026",
  },
  {
    image: "/images/eventFour.png",
    title: "Nigeria Developer Summit",
    slug: "nigeria-developer-summit",
    location: "Lagos, Nigeria",
    time: "9:30 AM",
    date: "Nov 2, 2026",
  },
  {
    image: "/images/eventFive.png",
    title: "TypeScript in the Real World",
    slug: "typescript-in-the-real-world",
    location: "Online",
    time: "4:00 PM",
    date: "Nov 8, 2026",
  },
  {
    image: "/images/eventSix.png",
    title: "AI & The Future of Software Development",
    slug: "ai-future-software-development",
    location: "Abuja, Nigeria",
    time: "11:00 AM",
    date: "Nov 15, 2026",
  },
];
