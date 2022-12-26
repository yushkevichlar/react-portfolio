import React from "react";
import { motion } from "framer-motion";

function Skills() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
				Skills
			</h3>
		</motion.div>
	);
}

export default Skills;
