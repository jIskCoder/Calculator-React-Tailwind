import React, { useState } from "react";
import HeaderContainer from "./HeaderContainer";
import ButtonsContainer from "./ButtonsContainer";
import CalculationContainer from "./CalculationContainer";

function MainContainer() {
  const [calculation, setCalculation] = useState("0");
  const handleButtonClick = (value) => {
    console.log("Boton:", value);
  };
  return (
    <div className="flex flex-col">
      <HeaderContainer />
      <CalculationContainer />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default MainContainer;
