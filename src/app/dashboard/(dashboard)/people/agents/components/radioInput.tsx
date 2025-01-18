import React from 'react'

export default function RadioInput() {
  return (
    <label className='ms-auto' htmlFor='radio-input'>
        <input type="radio" className='hidden' name='radio-input' id='radio-input'/>
        <div className='rounded-full flex justify-center  items-center bg-black h-[22px] w-[22px]'>
<div className='bg-white rounded-full w-[10px] h-[10px]'>

</div>
        </div>
    </label>
  )
}
