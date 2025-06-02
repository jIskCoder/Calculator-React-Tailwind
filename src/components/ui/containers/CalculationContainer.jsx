import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import themes from "../../shared/themes";

function CalculationContainer({ calculation = "0" }) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themes.find((t) => t.name === theme) || themes[0];
  return (
    <div
      className={`flex items-center justify-end text-[40px] sm:text-[56px] text-right 
    py-7 px-6 sm:py-10 sm:px-8 max-w-[327px] sm:max-w-[540px] overflow-hidden rounded-xl h-[88px] sm:h-[128px] font-bold tracking-[-0.6704px] ${currentTheme.calculationText} ${currentTheme.calculationBg}`}
    >
      {calculation.slice(0, 13)}
    </div>
  );
}

export default CalculationContainer;
