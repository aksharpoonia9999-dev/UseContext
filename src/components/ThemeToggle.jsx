import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-42.5 h-11.5 p-2 text-nowrap rounded-full border border-solid font-medium text-sm sm:text-base cursor-pointer transition-all duration-300 ease-in-out active:scale-95 ${
        theme === "dark"
          ? "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/60"
          : "bg-custom-blue text-white border-white/40 hover:bg-white hover:text-custom-blue hover:border-white"
      }`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
