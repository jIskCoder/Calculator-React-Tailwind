import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import themes from '../../shared/themes'

function MainLogo() {
    const { theme } = useContext(ThemeContext);
    const currentTheme = themes.find((t) => t.name === theme) || themes[0];
  return (
    <h1 className={`font-bold ${currentTheme.calculationText} text-[2rem]`}>
        calc
    </h1>
  )
}

export default MainLogo