import React, { useState } from "react";
import "./NestedCommentsStyle.css";
export default function NestedComment({ comment, addReply }) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (!replyText.trim()) return;

    addReply(comment.id, replyText);
    setReplyText("");
    setShowReplyInput(false);
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>

      <button onClick={() => setShowReplyInput((prev) => !prev)}>Reply</button>

      {showReplyInput && (
        <div className="reply-box">
          <input
            type="text"
            placeholder="Write a reply"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={handleReply}>Submit</button>
        </div>
      )}

      {/* Recursive rendering of replies */}
      <div className="replies">
        {comment.replies.map((reply) => (
          <NestedComment key={reply.id} comment={reply} addReply={addReply} />
        ))}
      </div>
    </div>
  );
}
