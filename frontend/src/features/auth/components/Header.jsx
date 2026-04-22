import { Link } from "react-router-dom";

const Header = ({ linkName, to, ExtraElement }) => {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#020617]/80 px-6 py-4 backdrop-blur-xl md:px-12">
      <Link to={"/"} className="flex items-center gap-2">
        <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-xl font-bold tracking-tight text-transparent">
          InterviewAI
        </span>
      </Link>
      <div className="flex items-center gap-4">
        {ExtraElement}
        <Link
          to={to}
          className="text-sm text-violet-400 hover:text-fuchsia-400"
        >
          {linkName}
        </Link>
      </div>
    </header>
  );
};

export default Header;
