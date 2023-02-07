import React from "react";
import { DiCss3 } from "react-icons/di";
import {
  FaHtml5,
  FaSass,
  FaGitAlt,
  FaVuejs,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSap,
  SiRedux,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

export default function ExperienceCard(props) {
  return (
    <article
      className="flex flex-col items-center space-y-7 flex-shrink-0
      h-7/12 w-[300px] md:w-[500px] xl:w-[800px] snap-center bg-[#07112f] rounded-md
      p-10 opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-800">
      <div className="px-0 md:px-10">
        <h4 className="text-2xl xl:text-4xl font-light">{props.title}</h4>
        <p className="text-xl xl:text-2xl font-bold mt-1">{props.company}</p>
        <p className="uppercase pt-1 pb-2 xl:pb-5 xl:pt-2">{props.duration}</p>

        <div className="flex space-x-2 my-2">
          {props.technologies.map((el) => {
            switch (el) {
              case "html":
                return (
                  <div
                    className="h-10 w-10 rounded-full"
                    style={{ color: "#d84924" }}
                    title="HTML5"
                    key={el}>
                    <FaHtml5 size={30} />
                  </div>
                );
              case "css":
                return (
                  <div style={{ color: "#1e5da7" }} title="CSS3" key={el}>
                    <DiCss3 size={30} />
                  </div>
                );
              case "js":
                return (
                  <div style={{ color: "#ead41c" }} title="JavaScript" key={el}>
                    <SiJavascript size={30} />
                  </div>
                );
              case "sapui5":
                return (
                  <div style={{ color: "#1870c8" }} title="SAPUI5" key={el}>
                    <SiSap size={30} />
                  </div>
                );
              case "vue":
                return (
                  <div style={{ color: "#3eaf7c" }} title="Vue" key={el}>
                    <SiVuedotjs size={30} />
                  </div>
                );
              case "vuetify":
                return (
                  <div style={{ color: "#158fe9" }} title="Vuetify" key={el}>
                    <SiVuetify size={30} />
                  </div>
                );
              case "git":
                return (
                  <div style={{ color: "#e44c30" }} title="Git" key={el}>
                    <FaGitAlt size={30} />
                  </div>
                );
              default:
                console.log("no prop");
            }
          })}
        </div>

        <ul className="list-disc space-y-2 ml-5 text-md xl:text-lg">
          {props.summary.map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
