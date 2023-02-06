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

      <div className="grid gap-20 grid-cols-4">
        <div style={{ color: "#d84924" }} title="HTML5">
          <FaHtml5 size={60} />
        </div>
        <div style={{ color: "#1e5da7" }} title="CSS3">
          <DiCss3 size={60} />
        </div>
        <div style={{ color: "#c36291" }} title="SASS/SCSS">
          <FaSass size={60} />
        </div>
        <div style={{ color: "#ead41c" }} title="JavaScript">
          <SiJavascript size={60} />
        </div>
        <div style={{ color: "#1870c8" }} title="SAPUI5">
          <SiSap size={60} />
        </div>
        <div style={{ color: "#5ccfee" }} title="React">
          <FaReact size={60} />
        </div>
        {/* <div style={{ color: "#5ccfee" }} title="Redux">
          <SiRedux size={60} />
        </div> */}
        <div style={{ color: "#07b0ce" }} title="Tailwind CSS">
          <SiTailwindcss size={60} />
        </div>
        <div style={{ color: "#3eaf7c" }} title="Vue">
          <SiVuedotjs size={60} />
        </div>
        <div style={{ color: "#158fe9" }} title="Vuetify">
          <SiVuetify size={60} />
        </div>
        <div style={{ color: "#e44c30" }} title="Git">
          <FaGitAlt size={60} />
        </div>
        <div style={{ color: "#c13534" }} title="npm">
          <FaNpm size={60} />
        </div>
        <div title="Figma">
          <FaFigma size={60} />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
