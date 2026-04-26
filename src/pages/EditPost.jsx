import React, { useState } from "react";
import { usePost, useUpdatePost } from "../services/tanstack";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isPending, error } = usePost(id);
  const [form, setForm] = useState({
    title: data?.title || "",
    author: data?.author || "",
    body: data?.body || "",
  });
  const { mutation: mutationUpdate } = useUpdatePost(id, navigate);

  function handleSubmit(e) {
    e.preventDefault();
    mutationUpdate.mutate(form);
  }

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

  const inputClass =
    "w-full bg-zinc-900 border border-zinc-700 text-white text-sm font-mono px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors duration-200 placeholder-zinc-600";

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-10 border-b border-zinc-800 pb-8">
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Edit <span className="text-amber-400">Post</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              className={inputClass}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              Author
            </label>
            <input
              type="text"
              value={form.author}
              className={inputClass}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              Contents
            </label>
            <textarea
              rows={8}
              value={form.body}
              className={`${inputClass} resize-none`}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={mutationUpdate.isPending}
              className="flex-1 bg-amber-400 text-zinc-950 py-3 text-sm font-bold tracking-wide hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {mutationUpdate.isPending ? "Kaydediliyor..." : "Kaydet"}
            </button>
            <button
              type="button"
              onClick={() => navigate(`/posts/${id}`)}
              className="px-6 border border-zinc-700 text-zinc-400 text-sm font-mono hover:border-zinc-500 hover:text-zinc-300 transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
