import React from 'react'
import MainLogo from '../logo/MainLogo'
import ToggleThemeButton from '../buttons/ToggleThemeButton'

function HeaderContainer() {
  return (
    <div className='flex items-center justify-between mb-8'>
        <MainLogo />
        <ToggleThemeButton />
    </div>
  )
}

export default HeaderContainer