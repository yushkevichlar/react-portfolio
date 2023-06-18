import React, { useState } from "react";
import { motion } from "framer-motion";
import notesImg from "../assets/notes-app.webp";
import cryptoImg from "../assets/crypto-app.webp";
import chatImg from "../assets/chat-app.webp";
import portfolioImg from "../assets/portfolio-v1.webp";
import { FaGithub } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (projectIndex) => {
    setCurrentIndex(projectIndex);
  };

  let imgAnimation = {
    transition: { duration: 2 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const isMobile = window.innerWidth < 768;

  imgAnimation.initial = isMobile ? { y: -100 } : { y: -200 };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full
          justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-hidden snap-x snap-mandatory z-20">
        <div
          key={projects[currentIndex].name}
          className="w-screen flex-shrink-0 snap-center flex flex-col
                items-center p-20 md:p-44 md:h-screen brightness-90 transition duration-1000 ease-in-out">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-2xl md:text-3xl font-semibold text-center">
            {" "}
            {projects[currentIndex].name}{" "}
          </motion.h4>

          <div className="flex items-center justify-center">
            <div className="cursor-pointer hover:text-[#3a4cb3]">
              <ChevronLeftIcon
                className="h-7 w-7 mr-10 animate-pulse"
                onClick={prevSlide}
              />
            </div>

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="w-[250px] md:w-[500px] aspect-[3/2] object-contain"
              src={projects[currentIndex].src}
              alt="project"
            />

            <div
              className="cursor-pointer hover:text-[#3a4cb3]"
              onClick={nextSlide}>
              <ChevronRightIcon className="h-7 w-7 ml-10 animate-pulse" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex space-x-5 items-center justify-center font-semibold">
            <a
              className="hover:text-[#3a4cb3]"
              target="_blank"
              href={projects[currentIndex].githubLink}>
              <div className="flex items-center justify-center">
                Code <FaGithub className="h-5 w-5 ml-2" size={25} />
              </div>
            </a>

            <a
              className="hover:text-[#3a4cb3]"
              target="_blank"
              href={projects[currentIndex].demoLink}>
              <div className="flex items-center justify-center">
                Live Demo <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="space-y-10 px-0 md:px-10 max-w-6xl mt-5">
            <p className="text-s md:text-lg text-center">
              {projects[currentIndex].description}
            </p>
          </motion.div>

          <div className="flex top-4 justify-center py-2">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                onClick={() => goToSlide(projectIndex)}
                className={`text-2xl cursor-pointer hover:text-[#3a4cb3] ${
                  projectIndex === currentIndex ? "text-[#3a4cb3]" : ""
                }`}>
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
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
