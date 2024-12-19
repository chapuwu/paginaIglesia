import React, { useEffect, useRef, useState } from 'react'

export default function Conocenos({ conocenosRef }) {
    const [show, setShow] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShow((show) => show || entry.isIntersecting)
            },
            { rootMargin: '-300px' },
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            className={`flex flex-col items-center w-full transition-all duration-500 ease-out ${
                show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}>
            <h2 ref={conocenosRef} className='xl:text-4xl text-2xl text-logo font-bold font-sans'>
                ¡Queremos que nos conozcas!
            </h2>
            <p className='xl:text-2xl text-center my-6'>
                La mayoría de la gente rechaza lo que no conoce, por <b>mala información, prejuicios o temor.</b>
            </p>
            <p className='xl:text-2xl text-center my-6'>
                Aquello de <b className='italic'>"Mejor es malo conocido que bueno por conocer"</b>; es una triste
                realidad y un tremendo error de principios. Porque nunca puede ser <b className='italic'>"mejor"</b>; lo
                que se considera malo; ni el conformarse en la ignorancia puede ser garantía de una vida exitosa y
                feliz. Pero hay otro tipo de personas, entre las cuales tal vez te encontrás, que no se dejan llevar por
                los rumores ni por los prejuicios, personas íntegras y profundamente honestas consigo mismas, que no
                aceptarían ni rechazarían una información sin haberla analizado y comparado a fin de comprobar su
                veracidad.
            </p>
            <p className='xl:text-2xl my-6 text-center'>
                Si vos perteneces a este segundo grupo, te invitamos a leer nuestras creencias y a sacar tus propias
                conclusiones.
            </p>
        </div>
    )
}
