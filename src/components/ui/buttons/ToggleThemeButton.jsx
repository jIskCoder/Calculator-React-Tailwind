import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import themes from "../../shared/themes";

function ToggleThemeButton() {
  const { theme } = useContext(ThemeContext);
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
          className={`flex items-center w-[4.4375rem] h-[1.625rem] border-transparent rounded-[0.8125rem] p-[0.3125rem] relative ${currentTheme.toggleThemeBg}`}
        >
          <button
            className={`w-4 h-4 border-transparent rounded-full cursor-pointer absolute ${currentTheme.toggleThemeButton}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ToggleThemeButton;
