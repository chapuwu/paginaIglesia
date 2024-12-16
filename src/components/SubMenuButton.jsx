import React from 'react'

export default function SubMenuButton({ subButtonText }) {
    return (
        <div>
            <div className='flex flex-col h-full'>
                <span
                    onClick={() => console.log(subButtonText)}
                    className='text-logo text-2xl font-sans text-center cursor-pointer'>
                    {subButtonText}
                </span>
            </div>
        </div>
    )
}
