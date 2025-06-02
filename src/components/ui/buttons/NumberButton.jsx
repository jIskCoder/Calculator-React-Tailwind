import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import themes from "../../shared/themes";

function NumberButton({ text = "", onClick }) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themes.find((t) => t.name === theme) || themes[0];

  return (
    <button
      onClick={() => onClick(text)}
      className={`flex items-center justify-center w-[60px] h-[60px] sm:w-[101px] rounded-[5px] text-3xl font-bold 
        ${currentTheme.bgButton} ${currentTheme.text} ${currentTheme.hover} ${currentTheme.shadowButton} cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default NumberButton;
