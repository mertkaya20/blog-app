import React, { useState } from "react";
import { useAddPost } from "../services/tanstack";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const [form, setForm] = useState({ title: "", author: "", body: "" });
  const navigate = useNavigate();
  const { mutation } = useAddPost(navigate);

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(form);
  }

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
            New <span className="text-amber-400">Post</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Yazınıza bir başlık verin..."
              className={inputClass}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              Author
            </label>
            <input
              id="author"
              type="text"
              placeholder="Adınız..."
              className={inputClass}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              Content
            </label>
            <textarea
              id="body"
              rows={8}
              placeholder="Yazmak istediğiniz her şeyi buraya..."
              className={`${inputClass} resize-none`}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="flex-1 bg-amber-400 text-zinc-950 py-3 text-sm font-bold tracking-wide hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {mutation.isPending ? "Being published..." : "Publish"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
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

export default NewPost;
