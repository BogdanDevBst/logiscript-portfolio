import About from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import HomeLandingPage from "@/components/sections/homeLandingPage";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <HomeLandingPage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
