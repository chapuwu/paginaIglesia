import React from 'react'
import { useState } from 'react'

export default function Header({ buttonText, children }) {
    const [hoveringButton, setHoveringButton] = useState(false)
    const [hoveringDropdown, setHoveringDropdown] = useState(false)

    children = children && !Array.isArray(children) ? [children] : children

    return (
        <div className='relative'>
            <button
                onClick={() => setHoveringButton(true)}
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}
                className={`text-xl text-logo transition-colors duration-200 hover:text-orange-300 ${
                    children ? 'cursor-pointer' : 'cursor-default'
                }`}>
                {buttonText}
            </button>
            <ul
                className={`absolute min-w-full bg-white rounded-md overflow-hidden transition-all duration-200 shadow text-logo ${
                    children && (hoveringButton || hoveringDropdown)
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                onMouseEnter={() => setHoveringDropdown(true)}
                onMouseLeave={() => setHoveringDropdown(false)}>
                {children &&
                    children.map((link, i) => (
                        <li className='py-2 px-6 hover:text-white hover:bg-logo transition-colors duration-200' key={i}>
                            {link}
                        </li>
                    ))}
            </ul>
        </div>
    )
}
