import { IoBackspace } from "react-icons/io5";
import ChangeFont from "./ChangeFont";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full p-8">
      <span className="flex items-center gap-2">
        <IoBackspace size={32} />
        <h1 className="text-2xl font-black">typo-dash</h1>
      </span>
      <span className="flex items-center gap-2">

      <ToggleTheme/>
      <ChangeFont />
      </span>
    </nav>
  );
}

export default Navbar;
