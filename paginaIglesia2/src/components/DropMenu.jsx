import React from 'react'

export default function DropMenu({ statusClick }) {
    return (
        <div className='absolute bg-white w-10 h-10'>
            <h1 className='text-black'>{statusClick ? 'VIVA DIOS' : 'VIA DIOS 2'}</h1>
        </div>
    )
}
