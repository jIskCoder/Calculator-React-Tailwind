import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import themes from "../../shared/themes";

function SecondaryButton({ text = "", size = "big", equal = false, onClick }) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themes.find((t) => t.name === theme) || themes[0];

  const sizeClasses =
    size === "big" ? "w-[133px] sm:w-[227px] h-[60px] text-[20px] sm:text[28px]" : "w-[60px] sm:w-[101px] h-[60px]";
  const equalButton = equal
    ? `${currentTheme.buttonEqualbg} ${currentTheme.shadowButtonEqual} ${currentTheme.buttonEqualHover}`
    : `${currentTheme.buttonSecondarybg} ${currentTheme.shadowButtonSecondary} ${currentTheme.buttonSecondaryHover}`;

  return (
    <button
      onClick={() => onClick(text)}
      className={`flex items-center justify-center ${sizeClasses} rounded-[5px] font-bold uppercase
        ${equalButton} ${currentTheme.buttonTextSecondary} cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
