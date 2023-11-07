import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

const CommentForm = ({ btnLabel, forSubmitHandler }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    forSubmitHandler(value)
    setValue("")
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-black rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none"
          rows="5"
          placeholder="Leave your comment..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-black text-white font-semibold mt-2"
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
