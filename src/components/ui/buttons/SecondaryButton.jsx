import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import themes from "../../shared/themes";

function SecondaryButton({ text = "", size = "big", equal = false, onClick }) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themes.find((t) => t.name === theme) || themes[0];

  const sizeClasses =
    size === "big" ? "w-[8.3125rem] sm:w-[14.1875rem] h-[3.75rem] text-[1.25rem] sm:text[1.75rem]" : "w-[3.75rem] sm:w-[6.3125rem] h-[3.75rem]";
  const equalButton = equal
    ? `${currentTheme.buttonEqualbg} ${currentTheme.shadowButtonEqual} ${currentTheme.buttonEqualHover}`
    : `${currentTheme.buttonSecondarybg} ${currentTheme.shadowButtonSecondary} ${currentTheme.buttonSecondaryHover}`;

  return (
    <button
      onClick={() => onClick(text)}
      className={`flex items-center justify-center ${sizeClasses} rounded-[0.3125rem] font-bold uppercase
        ${equalButton} ${currentTheme.buttonTextSecondary} cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
