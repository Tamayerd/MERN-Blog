import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ className, logginedUserId }) => {
  const [comment, setComment] = useState([]);
  const mainComments = comment.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState(null);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComment(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(), //Returns a date as a string value
    };
    setComment((curState) => {
      return [newComment, ...curState];
    });
    setAffectedComment(null);
  };

  const updateCommentHandler = (value, commentId) => {
    const updateComment = comment.map((comments) => {
      if (comments._id === commentId) {
        return { ...comments, desc: value };
      }
      return comments;
    });
    setComment(updateComment);
    setAffectedComment(null);
  };

  const deleteCommantHandler = (commentId) => {
    const updatedComments = comment.filter((comments) => {
      return comments._id !== commentId;
    });
    setComment(updatedComments);
  };
  const getRepliesHandler = (commentId) => {
    return (
      comment
        .filter((comments) => comments.parent === commentId)
        //sort dates
        .sort((a, b) => {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        })
    );
  };
  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      ></CommentForm>
      <div className=" space-y-4 mt-8 ">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteCommant={deleteCommantHandler}
            replies={getRepliesHandler(comment._id)}
          ></Comment>
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
