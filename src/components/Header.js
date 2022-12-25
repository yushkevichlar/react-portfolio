import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center"
			>
				{/*Social icons */}
				<SocialIcon
					url="https://linkedin.com/in/yushkevichlar"
					fgColor="#3a4cb3"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/yushkevichlar"
					fgColor="#3a4cb3"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://t.me/yushkevichlar"
					fgColor="#3a4cb3"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center text-[#3a4cb3] font-thin cursor-pointer"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="#3a4cb3"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-[#3a4cb3] font-medium ">
					Get In Touch
				</p>
			</motion.div>
		</header>
	);
}
