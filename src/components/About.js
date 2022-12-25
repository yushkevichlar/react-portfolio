import React from "react";
import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative text-center md:text-left
      max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
				About
			</h3>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">Here is a little background</h4>
			</div>

			<p className="text-base">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ratione
				veniam ut id temporibus? Debitis provident similique sed explicabo ad
				quo sapiente neque quis necessitatibus, rerum earum ex. Vel, sequi.Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Neque ratione veniam
				ut id temporibus? Debitis provident similique sed explicabo ad quo
				sapiente neque quis necessitatibus, rerum earum ex. Vel, sequi.
			</p>
		</motion.div>
	);
}
