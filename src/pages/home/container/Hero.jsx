import React from "react";
import { images } from "../../../constants";
import { BiSearchAlt2 } from "react-icons/bi";
const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row ">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>

        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          fugit?
        </p>
        <div>
          <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
            <div className="relative">
              <BiSearchAlt2 className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 w text-[#959EAD]"></BiSearchAlt2>
              <input
                className="paleceholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
                type="text"
                placeholder="Search article"
              ></input>
            </div>
            <button className="w-full bg-blue-400 mt-2 text-white font-semibold rounded-lg px-5 py-2 md:absolute md:right-2 md:top-5 md:-translate-y-1/2 md:w-fit md:py-2">
              Search
            </button>
          </div>
        </div>
        <div className="flex mt-4 flex-col lg:item-start lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-xs">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm  xl:text-xs">
            <li className="rounded-lg bg-blue-400 bg-opacity-10 px-3 py-1.5 text-blue-400 font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-blue-400 bg-opacity-10 px-3 py-1.5  text-blue-400 font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-blue-400 bg-opacity-10 px-3 py-1.5  text-blue-400 font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
