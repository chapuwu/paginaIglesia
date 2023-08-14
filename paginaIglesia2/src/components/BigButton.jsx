import { useState } from 'react'

export default function BigButton({ children, scrollTo, className }) {
    function handleButtonClick(event) {
        event.preventDefault()
        scrollTo.current.scrollIntoView({ behavior: 'smooth' })
    }

    const [hovering, setHovering] = useState(false)

    return (
        <button
            onClick={handleButtonClick}
            className={`text-3xl relative overflow-hidden font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 ${className}`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <span className='z-10 relative'>{children}</span>
            <div
                className={`bg-logo transition-all top-0 left-0 duration-300 absolute h-full ${
                    hovering ? 'w-full' : 'w-0'
                }`}></div>
        </button>
    )
}
