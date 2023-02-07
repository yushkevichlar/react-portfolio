import React from "react";
import { motion } from "framer-motion";
import { GrDocumentPdf } from "react-icons/gr";
import cvFile from "../assets/CV - Larisa Yushkevich.pdf";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left
      max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
        About
      </h3>

      {/* <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 object-cover xl:w-[700px]"
      />      */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 object-cover xl:w-[600px]"
      />

      {/* <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl text-[#465cd9]">Here is a little background</h4>
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center mt-[100px] md:mt-0 xl:mt-0">
        <p className="text-left text-lg md:text-xl xl:text-xl max-w-[800px]">
          &nbsp;&nbsp;&nbsp;I’ve been interested in web design and programming
          for over 3 years now. Since then, I've become a skilled Front-end
          Developer who worked in various industries and with various
          technologies. Now my goal is to become a Full Stack Developer by
          learning the modern back-end stack.
        </p>

        <a download="" href={cvFile}>
          <div className="flex align-center justify-between bg-[#465cd9] opacity-70 hover:opacity-100 w-[220px] h-[60px] mt-3 py-5 px-10 rounded-md text-black font-bold text-md cursor-pointer">
            Download CV <GrDocumentPdf size={20} />
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
