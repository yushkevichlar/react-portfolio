import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
        Projects
      </h3>

      <div className="text-xl text-center">
        <span className="text-3xl animate-pulse">Coming soon...</span>
        <br />
        <br />
        <span className="text-gray-400">
          You can look at the{" "}
          <a
            href="https://yushkevichlar.github.io/Portfolio/#projects"
            target="_blank"
            className="underline">
            old version
          </a>{" "}
          for now
        </span>
      </div>
    </motion.div>
  );
}

export default Projects;
