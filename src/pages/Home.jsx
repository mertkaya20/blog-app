import React, { useState } from "react";
import { usePosts } from "../services/tanstack";
import PostCard from "../components/PostCard";

function Home() {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = usePosts(page, 2);

  if (isPending)
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

  if (error)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-red-400 font-mono">{error.message}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 border-b border-zinc-800 pb-8">
          <h1
            className="text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Latest <span className="text-amber-400">Posts</span>
          </h1>
          <p className="text-zinc-500 text-sm font-mono">Page {page}</p>
        </div>

        {/* Post listesi */}
        <div className="flex flex-col gap-4 mb-10">
          {data.data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="flex items-center gap-2 text-zinc-400 text-sm font-mono disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-400 transition-colors duration-200"
          >
            ← Previous
          </button>

          <span className="text-zinc-600 text-xs font-mono">{page}</span>

          <button
            disabled={data.next === null}
            onClick={() => setPage(page + 1)}
            className="flex items-center gap-2 text-zinc-400 text-sm font-mono disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-400 transition-colors duration-200"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
