import React from 'react'
import NumberButton from '../buttons/NumberButton'
import SecondaryButton from '../buttons/SecondaryButton'


function ButtonsContainer({ theme = "" }) {
  return (
    <div className='bg-[var(--color-secondary-1)] p-6'>
        <div className="flex items-center flex-wrap justify-center gap-3 w-[327px]">
            <NumberButton text="7" theme={theme} />
            <NumberButton text="8" theme={theme} />
            <NumberButton text="9" theme={theme} />
            <SecondaryButton text="del" theme={theme} size="small" equal={false} />
            <NumberButton text="4" theme={theme} />
            <NumberButton text="5" theme={theme} />
            <NumberButton text="6" theme={theme} />
            <NumberButton text="+" theme={theme} />
            <NumberButton text="1" theme={theme} />
            <NumberButton text="2" theme={theme} />
            <NumberButton text="3" theme={theme} />
            <NumberButton text="-" theme={theme} />
            <NumberButton text="." theme={theme} />
            <NumberButton text="0" theme={theme} />
            <NumberButton text="/" theme={theme} />
            <NumberButton text="x" theme={theme} />
            <SecondaryButton text="reset" theme={theme} size="big" equal={false} />
            <SecondaryButton text="=" theme={theme} size="big" equal={true} />
        </div>
    </div>
  )
}

export default ButtonsContainer