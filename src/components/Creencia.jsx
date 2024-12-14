import React from 'react'

export default function Creencia({ titulo, informacion }) {
    return (
        <div className='bg-orange-200 my-4 h-48 flex items-center justify-evenly flex-col rounded-lg'>
            <h3 className='text-logo text-3xl font-bold font-sans'>{titulo}</h3>
            <div className='bg-orange-100 rounded-lg w-11/12'>
                <p className='text-xl text-center'>{informacion}</p>
            </div>
        </div>
    )
}
