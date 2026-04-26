import React from "react";

function CommentList({ comment }) {
  return (
    <div className="border-l-2 border-zinc-700 pl-4 py-2 hover:border-amber-400 transition-colors duration-200">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-zinc-950 text-xs font-bold">
          {comment.author?.[0]?.toUpperCase()}
        </div>
        <span className="text-zinc-300 text-sm font-semibold">
          {comment.author}
        </span>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed">{comment.body}</p>
    </div>
  );
}

export default CommentList;
