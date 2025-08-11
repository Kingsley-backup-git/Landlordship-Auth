
import RadioInput from '@/app/auth/setup/components/inputs/radioButton'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Options({ className, subClassName,Icon, ...props }: { className: string; subClassName: string;  Icon: any; header: string; text: string; checked:boolean }) {

  return ( 
      <div className={className}>
      {Icon !== "" && <Icon className="text-[#1C1C1C] text-2xl" />}
          
          <div className={subClassName}>
              <h1 className='text-black text-sm font-semibold'>{props.header}</h1>
              <p className='text-[#00000066] font-normal mt-1'>{props.text}</p>
          </div>

          <RadioInput checked={props.checked} onChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  )
}
