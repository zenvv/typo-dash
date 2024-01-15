import { IoBackspace } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full p-4">
      {/* <span className="flex items-center gap-2">
        <IoBackspace size={32} />
        <h1 className="text-2xl font-black">typo-dash</h1>
      </span> */}
      <a
        href="/"
        className="transition-all scale-95 hover:scale-90 active:scale-100 hover:opacity-80"
      >
        <img src="/Logo.svg" alt="typo-dash" className="h-16 dark:invert " />
      </a>
    </nav>
  );
}

export default Navbar;
