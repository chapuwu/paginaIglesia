import React from 'react'

export default function Creencia({ titulo, informacion }) {
    return (
        <div className='bg-orange-200 p-5 my-4 flex items-center justify-evenly flex-col rounded-lg xl:w-2/3 w-11/12'>
            <h3 className='text-logo xl:text-3xl text-2xl text-center font-bold font-sans mb-2'>{titulo}</h3>
            <div className='rounded-lg w-11/12'>
                <p className='xl:text-xl text-xl text-center font-sans'>{informacion}</p>
            </div>
        </div>
    )
}
