import React from 'react'
import { useState } from 'react'

export default function Header({ buttonText, dropdown }) {
    const [hoveringButton, setHoveringButton] = useState(false)
    const [hoveringDropdown, setHoveringDropdown] = useState(false)

    return (
        <div className='relative'>
            <button
                onClick={() => setHoveringButton(true)}
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}
                className={`text-xl text-logo transition-colors duration-200 hover:text-orange-300 ${
                    dropdown ? 'cursor-pointer' : 'cursor-default'
                }`}>
                {buttonText}
            </button>
            <ul
                className={`absolute min-w-full bg-white ${
                    show ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}>
                <li>jejes</li>
            </ul>
        </div>
    )
}
