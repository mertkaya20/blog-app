import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router";
import { useComments, useDeletePost, usePost } from "../services/tanstack";
import CommentList from "../components/CommentList";

function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: comments,
    isPending: isCommentsArePending,
    error: commentsError,
  } = useComments(id);
  const { mutation: mutationDelete } = useDeletePost(navigate);
  const {
    data: posts,
    isPending: isPostIsPending,
    error: postError,
  } = usePost(id);

  if (isPostIsPending || isCommentsArePending)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex gap-2">
          <div
            className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    );

  if (postError || commentsError)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-red-400 font-mono">{postError.message}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Geri butonu */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 text-sm font-mono hover:text-amber-400 transition-colors duration-200 mb-10 no-underline"
        >
          ← Back
        </Link>

        {/* Post */}
        <article className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-amber-400 font-mono uppercase tracking-widest">
              {posts.category || "Genel"}
            </span>
            <span className="text-zinc-600 text-xs">·</span>
            <span className="text-zinc-500 text-xs font-mono">
              {posts.createdAt}
            </span>
          </div>

          <h1
            className="text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {posts.title}
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-zinc-800">
            <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-zinc-950 text-sm font-bold">
              {posts.author?.[0]?.toUpperCase()}
            </div>
            <span className="text-zinc-400 text-sm">— {posts.author}</span>
          </div>

          <p className="text-zinc-300 text-lg leading-loose">{posts.body}</p>
        </article>

        {/* Aksiyon butonları */}
        <div className="flex gap-3 mb-12 pb-12 border-b border-zinc-800">
          <Link
            to={`/edit/${id}`}
            className="px-5 py-2 border border-zinc-700 text-zinc-300 text-sm font-mono hover:border-amber-400 hover:text-amber-400 transition-all duration-200 no-underline"
          >
            Edit
          </Link>
          <button
            onClick={() => mutationDelete.mutate(id)}
            className="px-5 py-2 border border-red-800 text-red-500 text-sm font-mono hover:bg-red-950 hover:border-red-600 transition-all duration-200"
          >
            Delete
          </button>
        </div>

        {/* Yorumlar */}
        <div>
          <h2
            className="text-white text-xl font-bold mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Comments
            <span className="text-amber-400 ml-2 text-sm font-mono">
              ({comments.length})
            </span>
          </h2>
          <div className="flex flex-col gap-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentList key={comment.id} comment={comment} />
              ))
            ) : (
              <p className="text-zinc-600 text-sm font-mono">
                No comments yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
