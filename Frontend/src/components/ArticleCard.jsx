import React from "react";
import images from "../constants/images";
import { BsCheckCircle } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${className}`}
    >
      <img
        src={images.Post1}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      ></img>
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl tezt-dark-soft md:text-2x1 lg:text-[28px] ">
          Future of Work
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          magni.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img src={images.Profile} alt="profile" className="w-9 h-9 md:w-10 md:h-10"></img>
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Jack Zhuk
              </h4>
              <div className="flex- item-center gap-x-2 ">
                <span>
                  <BsCheckCircle className="w-3 h-3 text-[#36B37E]"></BsCheckCircle>
                </span>
                <span className="italic font-bold text-dark-light text-xs md:text-sm">
                  Vertified writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">02 May</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
