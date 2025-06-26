import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function About() {
  const introduction = `I'm a freelance front-end developer with 5+ years of experience building modern, scalable applications across web and desktop platforms. My core expertise lies in JavaScript/Typescript, React, Node.Js, and Electron.Js, and I've led projects from prototype to production in industries like e-commerce, green tech, smart vending, and education.`;

  const experience = `Previously, I worked as a full-time developer with N-and Group Ltd (Italy), where I led the development of vending software interfaces and was promoted to Tech Lead on the IVS-UI project — integrating indoor payment systems into smart vending machines using Electron and React, building the UI from scratch using React, TypeScript, Tailwind CSS, Electron.Js`;

  const services = [
    "End-to-end web apps (React, TypeScript, Next.js, Remix.js)",
    "Cross-platform desktop applications (Electron.Js, Ubuntu, Linux)",
    "APIs, dashboards, and e-commerce platforms",
    "Modern UI/UX with Tailwind CSS, RemixJS, Styled components, SCSS, CSS, Material UI, Shadcn/ui",
    "Performance-optimized, maintainable codebases",
  ];

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
      description: "Modernized legacy React project with Tailwind",
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

  const techStack =
    "React • Typescript • Electron • Node.Js • PostgreSQL • Firebase • Docker • CI/CD • Tailwind CSS • Vite • Linux • Ubuntu";

  const closing = `I'm open to remote freelance opportunities, especially projects that require ownership, clean architecture, and a product-focused mindset.`;

  return (
    <div>
      <section
        id="about"
        className="bg-black flex flex-col justify-center items-center gap-10 py-16 px-4 md:px-8 lg:px-16"
      >
        <h2 className="text-white text-4xl font-bold mb-8">About me</h2>

        <div className="max-w-4xl w-full text-white space-y-8">
          <div className="mb-6">
            <TextGenerateEffect words={introduction} />
          </div>

          <div className="mb-6">
            <TextGenerateEffect words={experience} />
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">
              Now, as an independent developer, I help clients build:
            </h3>
            <ul className="list-none space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-xl mr-4 mt-4.5">•</span>
                  <TextGenerateEffect words={service} />
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-blue-400 text-2xl font-semibold mb-4">
              🛠️ Key Projects:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900 transition-colors duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-xl mr-2 text-blue-400">•</span>
                    <h4 className="text-xl font-medium">
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          {project.name}
                        </a>
                      ) : (
                        <span className="text-blue-400">{project.name}</span>
                      )}
                    </h4>
                  </div>
                  <div className="ml-6 flex-grow">
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    <div className="mt-auto pt-2">
                      {project.group === "N-and" ? (
                        <p className="text-gray-500 italic text-sm">
                          This project is available only on beverages/snack
                          vending machines
                        </p>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200 inline-block"
                        >
                          Visit project →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">💻 Tech Stack:</h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <TextGenerateEffect words={techStack} />
            </div>
          </div>

          <div>
            <TextGenerateEffect words={closing} />
          </div>
        </div>
      </section>
    </div>
  );
}
