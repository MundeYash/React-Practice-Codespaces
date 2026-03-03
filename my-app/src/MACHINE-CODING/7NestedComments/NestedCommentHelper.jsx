import React, { useState } from "react";
import NestedComments from "./NestedComments";
import "./NestedCommentsStyle.css";

export default function NestedCommentHelper() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  // Add root level comment
  const handleAddComment = () => {
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      text: input,
      replies: [],
    };

    setComments((prev) => [...prev, newComment]);
    setInput("");
  };

  // Recursive function to insert reply
  const addReply = (commentId, replyText) => {
    const addReplyRecursive = (commentsList) => {
      return commentsList.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                text: replyText,
                replies: [],
              },
            ],
          };
        }

        return {
          ...comment,
          replies: addReplyRecursive(comment.replies),
        };
      });
    };

    setComments((prev) => addReplyRecursive(prev));
  };

  return (
    <div className="nested-comments">
      <h1>Nested Comments</h1>

      <div className="add-comment">
        <input
          type="text"
          placeholder="Add a comment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      <div className="comments-container">
        {comments.map((comment) => (
          <NestedComments
            key={comment.id}
            comment={comment}
            addReply={addReply}
          />
        ))}
      </div>
    </div>
  );
}
