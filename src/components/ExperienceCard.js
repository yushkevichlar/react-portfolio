import React from "react";

export default function ExperienceCard() {
	return (
		<article
			className="flex flex-col items-center space-y-7 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-blue-900 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">Frontend Developer</h4>
				<p className="text-2xl font-bold mt-1">Company</p>
				<div className="flex space-x-2 my-2">
					<img
						className="h-10 w-10 rounded-full"
						src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"
						alt="tech"
					></img>
					<img
						className="h-10 w-10 rounded-full"
						src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"
						alt="tech"
					></img>
					<img
						className="h-10 w-10 rounded-full"
						src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"
						alt="tech"
					></img>
				</div>
				<p className="uppercase py-5">Oct 2021 - Present</p>

				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	);
}
