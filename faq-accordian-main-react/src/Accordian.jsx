/* eslint-disable react/prop-types */
import iconMinus from './assets/icon-minus.svg'
import iconPlus from './assets/icon-plus.svg'
import { useState } from 'react'

export default function Accordian(props) {

    const [active, setActive] = useState(false)
    return (
        <div className='flex flex-col text-sm mt-2 mb-2'>
            <div className='flex justify-between items-center gap-2'>
                <h4 className='font-semibold text-dark-purple  hover:text-purple-500'>
                    {props.header}
                </h4>
                {
                    <img
                        src={active ? iconMinus : iconPlus}
                        className='w-4'
                        onClick={() => setActive(!active)}
                    />
                }

            </div>
            { active && 
            <p 
                className=' text-grayish-purple items-baseline font-normal text-left mt-2'>
                {props.description}
            </p>
}
        </div>
    )
}
