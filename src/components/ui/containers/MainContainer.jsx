import React, { useState } from "react";
import HeaderContainer from "./HeaderContainer";
import ButtonsContainer from "./ButtonsContainer";
import CalculationContainer from "./CalculationContainer";

function MainContainer() {
  const [calculation, setCalculation] = useState("0");
  const handleButtonClick = (value) => {

    if (value === "reset") {
      setCalculation("0");
      return;
    }

    if (calculation === "Error") {
      setCalculation("0");
    }

    if (value === "del") {
      if (calculation.length <= 1 || calculation === "0") {
        setCalculation("0");
      } else {
        setCalculation(calculation.slice(0, -1)); // Elimina el último carácter, -2 elimina ultimos 2 y asi sucesivamente
      }
      return;
    }

    if (value === "=") {
      try {
        const expresion = calculation.replace(/x/g, "*"); //Si el valor es =, toma lo que hay en calculation y reemplaza x por *
        const resultado = eval(expresion); //expresion es la cadena de texto que contiene lo que el usuario ha escrito, eval convierte el string en una expresión matemática
        setCalculation(resultado.toString()); // Convierte el resultado a string para que se pueda mostrar en la pantalla
      } catch {
        setCalculation("Error");
      }
      return;
    }

    if (calculation.length >= 13) {
      return;
    }

    if (calculation === "0") {
      setCalculation(value);
    } else {
      const nuevaCadena = calculation + value;
      setCalculation(nuevaCadena);
    }
  };
  return (
    <div className="flex flex-col">
      <HeaderContainer />
      <CalculationContainer calculation={calculation} />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default MainContainer;
