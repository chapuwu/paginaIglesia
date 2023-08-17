import React from 'react'
import { useState } from 'react'

export default function Header({ buttonText, dropdown, setStatusClick, statusClick }) {
    return (
        <button
            onClick={() => setStatusClick(!statusClick)}
            className={`text-xl text-logo rounded-md transition-all px-1 py-1 duration-200 hover:bg-orange-200  ${
                dropdown ? 'cursor-pointer' : 'cursor-default'
            }`}>
            {buttonText}
        </button>
    )
}
