import React from "react";
import themes from "../../shared/themes";

function NumberButton({ text = "", theme = "blue" }) {
  const currentTheme = themes.find((t) => t.name === theme) || themes[0];

  return (
    <button
      className={`flex items-center justify-center w-[60px] h-[60px] rounded-[5px] text-3xl font-bold 
        ${currentTheme.bgButton} ${currentTheme.text} ${currentTheme.shadowButton} ${currentTheme.hover} cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default NumberButton;
