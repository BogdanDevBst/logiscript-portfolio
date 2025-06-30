"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface Project {
  image?: string;
  link: string;
  name: string;
  description: string;
  group?: string;
}

export const ParallaxScroll = ({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(projects.length / 3);

  const firstPart = projects.slice(0, third);
  const secondPart = projects.slice(third, 2 * third);
  const thirdPart = projects.slice(2 * third);

  const renderProject = (el: Project) => (
    <div className="relative">
      {el.image ? (
        <Image
          src={el.image}
          className="h-60 w-full object-cover object-left-top gap-10 transition !m-0 !p-0 ease-in duration-300"
          height={400}
          width={400}
          alt={el.name}
        />
      ) : (
        <div className="h-60 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
        <div className="p-4 text-white">
          <h3 className="text-xl font-semibold mb-2">{el.name}</h3>
          <p className="text-sm text-gray-300 mb-3">{el.description}</p>
          {el.group === "N-and" ? (
            <p className="text-xs text-gray-400 italic">
              Available only on vending machines
            </p>
          ) : el.link !== "#" ? (
            <Link
              href={el.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm transition-colors duration-200 inline-block"
            >
              Visit project →
            </Link>
          ) : null}
        </div>
      </div>
      {el.link !== "#" && (
        <Link
          href={el.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Visit ${el.name} project`}
        />
      )}
    </div>
  );

  return (
    <div
      className={cn("h-auto items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              {renderProject(el)}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              {renderProject(el)}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              {renderProject(el)}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
