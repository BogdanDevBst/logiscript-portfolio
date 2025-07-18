"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="h-[30rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden gap-5"
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.7}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-10">
        Interested in working together?
      </h1>
      <Link href={"mailto:bn.workdev@gmail.com"} className="z-10">
        <Button size={"lg"}>
          Send me an email
          <Mail className="size-6" />
        </Button>
      </Link>
    </section>
  );
}
