import { IoBackspace } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full p-8">
      <span className="flex items-center gap-2">
        <IoBackspace size={32} />
        <h1 className="text-2xl font-black">typo-dash</h1>
      </span>
    </nav>
  );
}

export default Navbar;
