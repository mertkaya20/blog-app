import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="no-underline group block">
      <div className="border border-zinc-800 bg-zinc-900 p-6 hover:border-amber-400 hover:bg-zinc-800 transition-all duration-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-amber-400 font-mono uppercase tracking-widest">
            {post.category || "General"}
          </span>
          <span className="text-zinc-600 text-xs">·</span>
          <span className="text-zinc-500 text-xs font-mono">
            {post.createdAt}
          </span>
        </div>
        <h2
          className="text-white text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors duration-200"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {post.title}
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4">
          {post.body}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 text-xs">— {post.author}</span>
          <span className="text-amber-400 text-xs font-mono group-hover:translate-x-1 transition-transform duration-200">
            Keep reading →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
