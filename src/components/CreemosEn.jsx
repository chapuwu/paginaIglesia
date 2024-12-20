import React, { useEffect, useState } from 'react'
import Creencia from './Creencia'
import Bautismo from './Bautismo'
import SantaCena from './SantaCena'

export default function CreemosEn({ creenciasRef }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShow((show) => show || entry.isIntersecting)
            },
            { rootMargin: '-300px' },
        )
        observer.observe(creenciasRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            className={`flex flex-col items-center mb-16 ${
                show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            ref={creenciasRef}>
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
            <Bautismo />
            <SantaCena />
        </div>
    )
}
