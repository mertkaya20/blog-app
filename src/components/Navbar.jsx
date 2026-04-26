import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{ fontFamily: "'Georgia', serif" }}
      className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800"
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2 no-underline">
          <span className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors duration-200">
            The Blog
          </span>
          <span className="text-amber-400 text-2xl">.</span>
        </Link>
        <Link
          to="/new"
          className="flex items-center gap-2 bg-amber-400 text-zinc-950 px-5 py-2 text-sm font-bold tracking-wide hover:bg-amber-300 transition-colors duration-200 no-underline"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
          }}
        >
          + New Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
