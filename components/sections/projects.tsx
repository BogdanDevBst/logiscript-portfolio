"use client";

import { ParallaxScroll } from "../ui/parallax-scroll";

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-black flex flex-col justify-center items-center gap-10"
    >
      <h2 className="text-white text-4xl font-bold">Projects</h2>
      <ParallaxScroll projects={projects} />
    </section>
  );
}

const projects = [
  {
    name: "Climate Calculator",
    description: "Built for Carbon Savvy",
    link: "https://calculator.carbonsavvy.uk/",
  },
  {
    name: "VenueNow/Pebble",
    description: "Reduced client CO₂ emissions by 150+ tons/year",
    link: "https://www.gopebble.com/",
  },
  {
    name: "MyShine",
    description:
      "Modernized legacy React project with Tailwind CSS and TypeScript",
    link: "https://myshine.co.uk/",
  },
  {
    name: "ZNotes",
    description: "Contributed to a platform used by 6M+ global learners",
    link: "https://znotes.org/",
  },
  {
    group: "N-and",
    name: "Onympo",
    description: "Created a smart gym vending UI with Electron + Redux",
    link: "#",
  },
  {
    group: "N-and",
    name: "IVS-UI",
    description: "Created an interface from scratch for vending machines",
    link: "#",
  },
];
