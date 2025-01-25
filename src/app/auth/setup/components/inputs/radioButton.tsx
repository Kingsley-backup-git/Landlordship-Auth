import React from 'react'

export default function RadioInput() {
  return (
    <label className='absolute top-4 right-5' htmlFor='radio-input'>
        <input type="radio" className='hidden' name='radio-input' id='radio-input'/>
        <div className='rounded-full flex justify-center  items-center bg-[#1D3639] h-[16px] w-[16px] xs:h-[16px] xs:w-[16px]'>
<div className='bg-white rounded-full xs:w-[8px] w-[8px] h-[8px] xs:h-[8px]'>

</div>
        </div>
    </label>
  )
}
