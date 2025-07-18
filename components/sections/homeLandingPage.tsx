import { WavyBackground } from "../ui/wavy-background";

export default function HomeLandingPage() {
  return (
    <section id="home">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Welcome to my portfolio
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          I am a full-stack developer
        </p>
      </WavyBackground>
    </section>
  );
}
