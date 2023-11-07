import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ className, logginedUserId }) => {
  const [comment, setComment] = useState([]);
  const mainComments = comment.filter((comment) => comment.parent === null);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComment(commentData);
    })();
  }, []);
  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };
    setComment((curState) => {
      return [newComment, ...curState];
    });
  };
  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        forSubmitHandler={(value) => addCommentHandler(value)}
      ></CommentForm>
      <div className=" space-y-4 mt-8 ">
        {mainComments.map((comment)=>(
          <Comment comment={comment} logginedUserId={logginedUserId}></Comment>
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
