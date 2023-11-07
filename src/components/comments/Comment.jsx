import React from "react";
import images from "../../constants/images";
import { BiMessageSquare } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
const Comment = ({ comment, logginedUserId }) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] P-3 rounded-lg">
      <img
        src={images.Profile}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      ></img>
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en", {
            day: "numeric",
            moth: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="font-opensans mt-[10px] text-dark-light">
          {comment.desc}
        </p>
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggined && (
            <button className="flex items-center space-x-2">
              <BiMessageSquare className="w-4 h-auto"></BiMessageSquare>
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button className="flex items-center space-x-2">
                <FiEdit className="w-4 h-auto"></FiEdit>
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-2">
                <MdOutlineDeleteOutline className="w-4 h-auto"></MdOutlineDeleteOutline>
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
