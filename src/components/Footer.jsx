import React from "react";
import { images } from "../constants";
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsBalloonHeartFill } from "react-icons/bs"
const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10 ">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Futures</a>
            </li>
            <li>
              <a href="/">Documentions</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustration </a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privancy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first  md:col-span-4  lg:col-span-2">
          <img
            src={images.logo}
            alt="logo"
            className="w-20 h-auto brightness-1 invert mx-auto md:mx-0 rounded-full"
          ></img>
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <RiTwitterXLine className="w-6 h-auto"></RiTwitterXLine>
              </a>
            </li>
            <li>
              <a href="/">
                <FiFacebook className="w-6 h-auto"></FiFacebook>
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillLinkedin className="w-6 h-auto"></AiFillLinkedin>
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineInstagram className="w-6 h-auto"></AiOutlineInstagram>
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12">
          <div className="bg-black text-white p-3 rounded-full">
            <BsBalloonHeartFill className="w-7 h-auto"></BsBalloonHeartFill>
          </div>
          <p className="font-bold italic text-dark-light ">Copyright © 2023. Crafted with love.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
