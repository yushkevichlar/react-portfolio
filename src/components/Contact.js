import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:yushkevichlar@gmail.com?subject${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full
			justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#465cd9]">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-20">
        <div className="space-y-10 mr-5">
          <div className="flex items-center justify-center space-x-2">
            <SocialIcon
              className="h-7 w-7 animate-pulse text-[#465cd9]"
              target="_blank"
              rel="noopener noreferrer"
              url="https://t.me/yushkevichlar"
              fgColor="#3a4cb3"
              bgColor="transparent"
            />
            <p className="text-2xl">Telegram</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <SocialIcon
              className="h-7 w-7 animate-pulse text-[#465cd9]"
              target="_blank"
              rel="noopener noreferrer"
              url="https://linkedin.com/in/yushkevichlar"
              fgColor="#3a4cb3"
              bgColor="transparent"
            />
            <p className="text-2xl">LinkedIn</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer h-7 w-7 animate-pulse text-[#465cd9]"
              network="email"
              fgColor="#3a4cb3"
              bgColor="transparent"
            />
            <p className="text-2xl">yushkevichlar@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#465cd9] py-5 px-10 opacity-70 hover:opacity-100 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
