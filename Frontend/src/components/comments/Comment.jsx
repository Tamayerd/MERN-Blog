import React from "react";
import images from "../../constants/images";
import { BiMessageSquare } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  logginedUserId,
  setAffectedComment,
  affectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteCommant,
  replies,
}) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] P-3 rounded-lg">
      <img
        src={images.Profile}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      ></img>
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en", {
            day: "numeric",
            moth: "short",
            year: "numeric",
            hour: "2-digit",
          })}{" "}
        </span>

        {!isEditing && (
          <p className="font-opensans mt-[10px] text-dark-light">
            {comment.desc}
          </p>
        )}

        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          ></CommentForm>
        )}
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <BiMessageSquare className="w-4 h-auto"></BiMessageSquare>
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button
                className="flex items-center space-x-2"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
              >
                <FiEdit className="w-4 h-auto"></FiEdit>
                <span>Edit</span>
              </button>
              <button
                className="flex items-center space-x-2"
                onClick={() => deleteCommant(comment._id)}
              >
                <MdOutlineDeleteOutline className="w-4 h-auto"></MdOutlineDeleteOutline>
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          ></CommentForm>
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteCommant={deleteCommant}
                logginedUserId={logginedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              ></Comment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
