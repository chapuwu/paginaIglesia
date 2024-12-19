import React from 'react'

export default function SubMenuButton({ subButtonText }) {
    return (
        <div>
            <div className='flex flex-col h-full'>
                <a href='#' className='text-logo text-2xl font-sans text-center'>
                    {subButtonText}
                </a>
            </div>
        </div>
    )
}
