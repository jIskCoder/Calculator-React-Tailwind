import React from 'react'
import HeaderContainer from './HeaderContainer'
import ButtonsContainer from './ButtonsContainer'
import CalculationContainer from './CalculationContainer'

function MainContainer() {
  return (
    <div className='flex flex-col '>
        <HeaderContainer />
        <CalculationContainer />
        <ButtonsContainer />
    </div>
  )
}

export default MainContainer