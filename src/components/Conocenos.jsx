import React, { useEffect, useRef, useState } from 'react'
import BigButton from './BigButton'
import Creencia from './Creencia'

export default function Conocenos({ conocenosRef }) {
    const [show, setShow] = useState(false)
    const [showCreencias, setShowCreencias] = useState(false)
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
            className={`flex flex-col items-center transition-all duration-500 ease-out ${
                show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}>
            <h2 ref={conocenosRef} className='text-4xl text-logo font-bold font-sans'>
                ¡Queremos que nos conozcas!
            </h2>
            <p className='text-2xl my-6'>
                La mayoría de la gente rechaza lo que no conoce, por <b>mala información, prejuicios o temor.</b>
            </p>
            <p className='text-2xl my-6'>
                Aquello de <b className='italic'>"Mejor es malo conocido que bueno por conocer"</b>; es una triste
                realidad y un tremendo error de principios. Porque nunca puede ser <b className='italic'>"mejor"</b>; lo
                que se considera malo; ni el conformarse en la ignorancia puede ser garantía de una vida exitosa y
                feliz. Pero hay otro tipo de personas, entre las cuales tal vez te encontrás, que no se dejan llevar por
                los rumores ni por los prejuicios, personas íntegras y profundamente honestas consigo mismas, que no
                aceptarían ni rechazarían una información sin haberla analizado y comparado a fin de comprobar su
                veracidad.
            </p>
            <p className='text-2xl my-6'>
                Si vos perteneces a este segundo grupo, te invitamos a leer nuestras creencias y a sacar tus propias
                conclusiones.
            </p>
            <BigButton className='my-12'>Creemos En...</BigButton>
            <div className={`flex flex-col items-center`}>
                <Creencia
                    titulo={'Creemos en Dios'}
                    informacion={
                        'En un Dios personal, todopoderoso, creador del Universo que siente, piensa, decide y está presente en todas las circunstancias de nuestra vida; al cual oramos y a quien confiamos el cuidado de nuestras vidas sabiendo que todo lo que nos sucede resultará para nuestro bien. No solo creemos en su existencia sino también en su amor, demostrado al enviar a su único Hijo, Jesucristo, a la tierra a morir en nuestro lugar y adoptarnos para que nosotros también seamos llamados "hijos de Dios".'
                    }
                />
                <Creencia
                    titulo={'Creemos en Jesucristo'}
                    informacion={
                        'Siendo Dios se hizo hombre cuando nació de la virgen María. Predicó el arrepentimiento, el perdón de pecados, la libertad a los que estaban cautivos en sus angustias y enfermedades; prometió descanso a los fatigados, abundancia a los que nada tenían y vida eterna a los que creyeran en él. Fue crucificado, sepultado, resucitó al tercer día, venció a la muerte, ascendió al cielo para convertirse en el único mediador entre Dios y los hombres; juez de vivos y de muertos; Rey de reyes, Señor de señores; a quien amamos porque él nos amó primero y esperamos porque prometió regresar con poder y gloria para establecer su gobierno eterno.'
                    }
                />
                <Creencia
                    titulo={'Creemos en El Espíritu Santo'}
                    informacion={
                        'Que tiene la misión de convencernos de nuestras faltas, infundir el deseo de cambiar de actitud, producir una vida nueva; de consolarnos en nuestras tribulaciones, ayudarnos en la oración, crear sentimientos de amor, gozo, paz, paciencia, bondad, fe, humildad y dominio propio y de capacitamos para servir a Dios. Creemos que cuando una persona se convierte a Dios, es sellada por el Espíritu Santo como propiedad divina y, el mismo Espíritu le da la seguridad de que es un hijo de Dios.'
                    }
                />
            </div>
        </div>
    )
}
