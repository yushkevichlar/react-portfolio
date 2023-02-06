import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
        Experience
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full flex space-x-5 overflow-x-scroll pt-10 pb-5 px-10  snap-x snap-mandatory  scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-800">
        <ExperienceCard
          title="Trainee Front-end Developer (SAPUI5)"
          company="LeverX Group"
          duration="Sep 2021 - Oct 2021"
          summary={[
            "Mastered JS concepts: lexical environment, scope, closure, HTTP, AJAX, inheritance, async code, promises",
            "Learned SAPUI5 framework basics: controls, models, data binding, OData protocol, MVC pattern",
            "Explored ODataModel CRUD operations",
          ]}
          technologies={["html", "css", "js", "sapui5", "git"]}
        />
        <ExperienceCard
          title="Front-end Developer"
          company="BIVIAR Partners"
          duration="Oct 2021 - Present"
          summary={[
            "Developed SPAs with SAPUI5 framework based on MVC architecture (SAP HCM module)",
            "Developed components for creating complex business management system (CRM, HRM - internal corporate system) using Vue.js, Vuex, Vue Router and various libraries: Vuetify, Axios, Vue-ApexCharts",
            "Implemented API integration using Axios",
            "Discussed choices and common sense of using technologies for new project features and their realization",
            "Refactored 200+ components, making them readable and self-descriptive with Style Guides and best practices",
          ]}
          technologies={[
            "html",
            "css",
            "js",
            "sapui5",
            "vue",
            "vuetify",
            "git",
          ]}
        />
      </motion.div>
    </motion.div>
  );
}

export default WorkExperience;
