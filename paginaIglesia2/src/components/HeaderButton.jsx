import React from 'react'

export default function Header({ buttonText, dropdown }) {
    return (
        <button className={`text-xl text-logo ${dropdown ? 'cursor-pointer' : 'cursor-default'}`}>{buttonText}</button>
    )
}
