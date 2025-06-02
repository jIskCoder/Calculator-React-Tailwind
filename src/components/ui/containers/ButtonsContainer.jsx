import React, { useState, useContext } from "react";
import NumberButton from "../buttons/NumberButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { ThemeContext } from "../../../context/ThemeContext";
import themes from "../../shared/themes";

function ButtonsContainer({ onButtonClick }) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themes.find((t) => t.name === theme) || themes[0];
  return (
    <div
      className={`flex items-center flex-wrap mt-6 justify-center 
    gap-[13px] sm:gap-[24px] w-[327px] h-[420px] sm:w-[540px] sm:h-[480px] ${currentTheme.calculationBg} p-6 rounded-xl`}
    >
      <NumberButton text="7" theme={theme} onClick={onButtonClick} />
      <NumberButton text="8" theme={theme} onClick={onButtonClick} />
      <NumberButton text="9" theme={theme} onClick={onButtonClick} />
      <SecondaryButton text="del" theme={theme} onClick={onButtonClick} size="small" equal={false} />
      <NumberButton text="4" theme={theme} onClick={onButtonClick} />
      <NumberButton text="5" theme={theme} onClick={onButtonClick} />
      <NumberButton text="6" theme={theme} onClick={onButtonClick} />
      <NumberButton text="+" theme={theme} onClick={onButtonClick} />
      <NumberButton text="1" theme={theme} onClick={onButtonClick} />
      <NumberButton text="2" theme={theme} onClick={onButtonClick} />
      <NumberButton text="3" theme={theme} onClick={onButtonClick} />
      <NumberButton text="-" theme={theme} onClick={onButtonClick} />
      <NumberButton text="." theme={theme} onClick={onButtonClick} />
      <NumberButton text="0" theme={theme} onClick={onButtonClick} />
      <NumberButton text="/" theme={theme} onClick={onButtonClick} />
      <NumberButton text="x" theme={theme} onClick={onButtonClick} />
      <SecondaryButton text="reset" theme={theme} onClick={onButtonClick} size="big" equal={false} />
      <SecondaryButton text="=" theme={theme} onClick={onButtonClick} size="big" equal={true} />
    </div>
  );
}

export default ButtonsContainer;
