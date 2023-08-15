import React from 'react'

export default function Header({ buttonText, dropdown }) {
    return (
        <button
            className={`text-xl text-logo px-1 py-1 rounded-md transition-all duration-200 hover:bg-orange-200  ${
                dropdown ? 'cursor-pointer' : 'cursor-default'
            }`}>
            {buttonText}
        </button>
    )
}
