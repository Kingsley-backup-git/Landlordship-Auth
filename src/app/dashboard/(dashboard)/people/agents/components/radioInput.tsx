import React from 'react'

export default function RadioInput() {
  return (
    <label className='absolute top-4 right-5' htmlFor='radio-input'>
        <input type="radio" className='hidden' name='radio-input' id='radio-input'/>
        <div className='rounded-full flex justify-center  items-center bg-black h-[18px] w-[18px] xs:h-[18px] xs:w-[18px]'>
<div className='bg-white rounded-full xs:w-[8px] w-[8px] h-[8px] xs:h-[8px]'>

</div>
        </div>
    </label>
  )
}
