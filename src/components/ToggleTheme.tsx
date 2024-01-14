import { useEffect, useState} from "react";
import { IoMoon , IoSunny } from "react-icons/io5";

function ToggleTheme() {
  const [theme, setTheme] = useState<string | null>("light");

  useEffect(() => {
    if (theme === "dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }


  return (
    <span className="flex items-center gap-0">
      <button className="p-2 text-lg transition-all rounded-lg hover:bg-gray-500/10 hover:scale-105 active:scale-90" onClick={handleSwitchTheme}>
        {theme === "dark" ? <IoSunny /> : <IoMoon  />}

      </button>
    </span>
  );

  


}

export default ToggleTheme;
