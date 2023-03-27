import React from "react";
import { motion } from "framer-motion";
import notesImg from "../assets/notes-app.webp";
import cryptoImg from "../assets/crypto-app.webp";
import chatImg from "../assets/chat-app.webp";
import portfolioImg from "../assets/portfolio-v1.webp";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "Cryptocurrency Tracker 🪙",
      src: cryptoImg,
      githubLink: "https://github.com/yushkevichlar/react-cryptocurrencies",
      demoLink: "https://phenomenal-toffee-9c3a4b.netlify.app",
      description:
        "Allows users to search for information about various cryptocurrencies in real-time. Made with React JS, Material UI, Chart JS and CoinGecko API",
    },
    {
      name: "Notes App 📝",
      src: notesImg,
      githubLink: "https://github.com/yushkevichlar/encrypted-notes",
      demoLink: "https://beamish-macaron-e2531e.netlify.app",
      description:
        "Encrypted notes app built using TypeScript, React, Crypto.js, Tiptap Editor, Vite and Firebase",
    },
    {
      name: "Vue Firebase Chat 💬",
      src: chatImg,
      githubLink: "https://github.com/yushkevichlar/vue3-firebase-chat",
      demoLink: "https://yushkevichlar.github.io/VueChat",
      description:
        "Realtime Chat application made with Vue 3 (Composition API) and Firebase Realtime Database",
    },
    {
      name: "Weather App 🌤️",
      src: "https://yushkevichlar.github.io/Portfolio/img/weather.webp",
      githubLink:
        "https://github.com/yushkevichlar/yushkevichlar.github.io/tree/main/Weather",
      demoLink: "https://yushkevichlar.github.io/Weather",
      description:
        "Vanilla JS app created using the OpenWeatherMap API. Shows both Celsius and Fahrenheit degrees",
    },
    {
      name: "Portfolio V1 🙂",
      src: portfolioImg,
      githubLink:
        "https://github.com/yushkevichlar/yushkevichlar.github.io/tree/main/Portfolio",
      demoLink: "https://yushkevichlar.github.io/Portfolio",
      description:
        "First version of this website with dark/light themes and neat animations",
    },
  ];

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

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-800">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="w-screen flex-shrink-0 snap-center flex flex-col
                items-center p-20 md:p-44 md:h-screen brightness-90">
            <h4 className="text-2xl md:text-3xl font-semibold text-center">
              {" "}
              {project.name}{" "}
            </h4>

            <motion.img
              initial={{ y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[250px] md:w-[500px] aspect-[3/2] object-contain"
              src={project.src}
              alt="project"
            />

            <div className="flex space-x-5 items-center justify-center font-semibold">
              <a
                className="hover:text-[#596ee8]"
                target="_blank"
                href={project.githubLink}>
                <div className="flex items-center justify-center">
                  Code <FaGithub className="h-5 w-5 ml-2" size={25} />
                </div>
              </a>

              <a
                className="hover:text-[#596ee8]"
                target="_blank"
                href={project.demoLink}>
                <div className="flex items-center justify-center">
                  Live Demo{" "}
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                </div>
              </a>
            </div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl mt-5">
              <p className="text-m md:text-lg text-center">
                {project.description}
              </p>
            </div>

            <div className="mt-5 text-xs md:text-sm text-center">
              {i + 1} of {projects.length}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="w-full absolute top-[30%] bg-[#1d4ed8]/10 left-0 h-[500px] -skew-y-12" /> */}

      {/* <div className="text-xl text-center">
        <span className="text-3xl animate-pulse">Coming soon...</span>
        <br />
        <br />
        <span className="text-gray-400 text-base md:text-lg xl:text-xl">
          You can look at the{" "}
          <a
            href="https://yushkevichlar.github.io/Portfolio/#projects"
            target="_blank"
            className="underline">
            old version
          </a>{" "}
          for now
        </span>
      </div> */}
    </motion.div>
  );
}

export default Projects;
