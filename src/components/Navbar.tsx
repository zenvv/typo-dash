import { IoBackspace } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full p-8">
      {/* <span className="flex items-center gap-2">
        <IoBackspace size={32} />
        <h1 className="text-2xl font-black">typo-dash</h1>
      </span> */}
      <a
        href="/"
        className="transition-all hover:scale-90 active:scale-105 hover:opacity-80"
      >
        <img src="/Logo.svg" alt="typo-dash" className="h-16 dark:invert " />
      </a>
    </nav>
  );
}

export default Navbar;
