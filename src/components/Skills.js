import React from "react";
import { motion } from "framer-motion";
import { DiCss3 } from "react-icons/di";
import {
  FaHtml5,
  FaSass,
  FaGitAlt,
  FaVuejs,
  FaReact,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSap,
  SiRedux,
  SiTailwindcss,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

const skillsProps = [
  { name: "HTML5", iconTag: <FaHtml5 size={60} />, color: "#d84924" },
  { name: "CSS3", iconTag: <DiCss3 size={60} />, color: "#1e5da7" },
  { name: "SASS/SCSS", iconTag: <FaSass size={60} />, color: "#c36291" },
  { name: "JavaScript", iconTag: <SiJavascript size={60} />, color: "#ead41c" },
  { name: "SAPUI5", iconTag: <SiSap size={60} />, color: "#1870c8" },
  { name: "React", iconTag: <FaReact size={60} />, color: "#5ccfee" },
  {
    name: "Tailwind CSS",
    iconTag: <SiTailwindcss size={60} />,
    color: "#07b0ce",
  },
  { name: "Vue", iconTag: <SiVuedotjs size={60} />, color: "#3eaf7c" },
  { name: "Vuetify", iconTag: <SiVuetify size={60} />, color: "#158fe9" },
  { name: "Git", iconTag: <FaGitAlt size={60} />, color: "#e44c30" },
  { name: "npm", iconTag: <FaNpm size={60} />, color: "#c13534" },
  { name: "Figma", iconTag: <FaFigma size={60} />, color: "" },
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[800px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
        Skills
      </h3>

      <div className="grid gap-10 grid-cols-3 md:grid-cols-4 xl:grid-cols-4 md:gap-15">
        {skillsProps.map((el) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              style={{ color: el.color }}
              key={el.name}>
              {el.iconTag}
              <div className="text-blue-100 mt-2">{el.name}</div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
