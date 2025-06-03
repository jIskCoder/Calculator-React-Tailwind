import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import themes from "../../shared/themes";

function ToggleThemeButton() {
  const [toglePosition, setTogglePosition] = useState(0);
  const themeOrder = ["blue", "white", "purple"];

  const handleClick = () => {
    setTogglePosition((prev) => {
      const next = (prev + 1) % 3;
      setTheme(themeOrder[next]);
      return next;
    });
  };

  const { theme, setTheme } = useContext(ThemeContext);
  const currentTheme = themes.find((t) => t.name === theme) || themes[0];
  return (
    <div className="flex items-end justify-between w-[8.6875rem]">
      <h2 className={`uppercase font-bold ${currentTheme.calculationText}`}>theme</h2>
      <div>
        <div className={`flex w-full justify-between p-1 h-6 font-bold ${currentTheme.calculationText}`}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div
          className={`flex items-center w-[4.4375rem] h-[1.625rem]
             border-transparent rounded-[0.8125rem] p-[0.3125rem] relative ${currentTheme.toggleThemeBg}`}
        >
          <button
            onClick={handleClick}
            className={`w-4 h-4 border-transparent rounded-full cursor-pointer absolute transition-all duration-300 ease-in-out
              ${currentTheme.toggleThemeButton} ${
              toglePosition === 0 ? "left-1" : toglePosition === 1 ? "left-7" : "right-1"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default ToggleThemeButton;
