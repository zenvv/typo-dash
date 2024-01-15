import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function ToggleTheme() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string | null>(storedTheme || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    // Toggle between "light" and "dark" themes
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <span className="flex items-center gap-0">
      <button
        className="p-2 text-lg transition-all rounded-lg hover:bg-gray-500/10 hover:scale-105 active:scale-90"
        onClick={handleSwitchTheme}
      >
        {theme === "dark" ? <IoSunny /> : <IoMoon />}
      </button>
    </span>
  );
}

export default ToggleTheme;
