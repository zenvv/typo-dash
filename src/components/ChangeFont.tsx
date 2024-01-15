import { useEffect } from "react";
import { PiTextAaFill } from "react-icons/pi";

function ChangeFont() {
  useEffect(() => {
    const font = getComputedStyle(document.documentElement).getPropertyPriority(
      "--font-selected"
    );
  }, []);

  function setColor(color: string | null) {
    document.documentElement.style.setProperty("--font-selected", color);
  }

  return (
    <span className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500/10">
      <label htmlFor="font-selector" className="text-lg">
        <PiTextAaFill />
      </label>
      <select
        className="font-medium bg-transparent rounded-none outline-none [data-open]:rounded-none"
        name="fonts"
        id="font-selector"
        onChange={(e) => setColor(e.target.value)}
      >
        <option
          className="bg-gray-100 rounded-none dark:bg-gray-900"
          value="DM Mono, monospace"
        >
          Monospace
        </option>
        <option
          className="bg-gray-100 rounded-none dark:bg-gray-900"
          value="DM Sans, sans-serif"
        >
          Sans Serif
        </option>
      </select>
    </span>
  );
}

export default ChangeFont;
