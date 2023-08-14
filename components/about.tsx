"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After spending years as an english teacher and a business admistrator, I
        decided to pursue my passion for programming and do it{" "}
        <span className="font-medium">full-time.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect of it. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a solution to a problem.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cats. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">AI and data science</span>.
        I returned to college as well, and I'm currently enrolled in a{" "}
        <span className="italic">systems analysis and development</span> course.
      </p>
    </motion.section>
  );
}
