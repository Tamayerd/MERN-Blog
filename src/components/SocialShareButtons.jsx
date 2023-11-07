import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { AiOutlineReddit, AiOutlineWhatsApp } from "react-icons/ai";
const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a target="_blank" rel="noreferrer" href="/">
        <CiFacebook className="text-[#3b5998] w-12 h-auto"></CiFacebook>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}`}
      >
        <CiTwitter className="text-[#00acee] w-12 h-auto"></CiTwitter>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://reddit.com/submit?url=${url}&title=${title}`}
      >
        <AiOutlineReddit className="text-[#ff4500] w-12 h-auto"></AiOutlineReddit>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send/?text=${url}`}
      >
        <AiOutlineWhatsApp className="text-[#25D366] w-12 h-auto"></AiOutlineWhatsApp>
      </a>
    </div>
  );
};

export default SocialShareButtons;
