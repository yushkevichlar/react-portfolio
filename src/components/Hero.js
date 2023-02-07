import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text] = useTypewriter({
    words: ["Hi, my name's Lara", "I'm a Frontend Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
       text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover brightness-75"
        src="https://media.istockphoto.com/id/1363841854/vector/woman-with-laptop-working-in-internet.jpg?b=1&s=612x612&w=0&k=20&c=D1wrh4MPVY4xHXBUQxDhdzFUMRfp_tnA-rZwcfVgSVk="
        alt="main-photo"></img>
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#465cd9] pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#3a4cb3" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#contact">
            <button className="heroButton">Contact</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
