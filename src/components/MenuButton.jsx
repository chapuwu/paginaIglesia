import React from 'react'
import SubMenuButton from './SubMenuButton'
import arrowBack from '../img/arrowBack.png'

export default function MenuButton({
    texto,
    iglesiaMenu,
    setIglesiaMenu,
    materialMenu,
    setMaterialMenu,
    setNenesMenu,
    nenesMenu,
    setCentroDesarrollo,
    centroDesarrollo,
    setContacto,
    contacto,
}) {
    const subMenu = [
        ['Creemos en...', 'Ubicaciones', 'Agenda', 'Grupos Celulares', 'Asociación Filantrópica', 'Nuestro Pastor'],
        ['Estudios Inductivos', 'Discipulado', 'Otros Escritos', 'Guías de Oración'],
        ['Trabajo', 'Material'],
        ['Descripcion', 'Ubicación', 'Reservas'],
    ]

    function handleClick(texto) {
        if (texto === 'Iglesia') {
            setIglesiaMenu(!iglesiaMenu)
        } else if (texto === 'Material') {
            setMaterialMenu(!materialMenu)
        } else if (texto === 'Niños') {
            setNenesMenu(!nenesMenu)
        } else if (texto === 'Centro de Desarrollo') {
            setCentroDesarrollo(!centroDesarrollo)
        } else if (texto === 'Contacto') {
            setContacto(!contacto)
        }
    }

    return (
        <div className='gap-6'>
            <button onClick={() => handleClick(texto)} className='text-logo text-2xl font-sans'>
                {texto}
            </button>
            {iglesiaMenu ? (
                <div className='bg-orange-200 absolute right-1 top-1 flex flex-col h-50 gap-6 p-3 w-full rounded-lg'>
                    <img src={arrowBack} className='h-11 w-11 cursor-pointer' onClick={() => setIglesiaMenu(false)} />
                    <SubMenuButton subButtonText={'Creemos en...'} />
                    <SubMenuButton subButtonText={'Ubicaciones'} />
                    <SubMenuButton subButtonText={'Agenda'} />
                    <SubMenuButton subButtonText={'Grupos Celulares'} />
                    <SubMenuButton subButtonText={'Asociación Filantrópica'} />
                    <SubMenuButton subButtonText={'Nuestro Pastor'} />
                </div>
            ) : (
                ''
            )}
            {materialMenu ? (
                <div className='bg-orange-200 absolute right-1 top-1 flex flex-col h-50 gap-6 p-3 w-full h-full rounded-lg'>
                    <img src={arrowBack} className='h-11 w-11 cursor-pointer' onClick={() => setMaterialMenu(false)} />
                    <SubMenuButton subButtonText={'Estudios Inductivos'} />
                    <SubMenuButton subButtonText={'Discipulado'} />
                    <SubMenuButton subButtonText={'Otros Escritos'} />
                    <SubMenuButton subButtonText={'Guías de Oración'} />
                </div>
            ) : (
                ''
            )}
            {nenesMenu ? (
                <div className='bg-orange-200 absolute right-1 top-1 flex flex-col h-50 gap-6 p-3 w-full h-full rounded-lg'>
                    <img src={arrowBack} className='h-11 w-11 cursor-pointer' onClick={() => setNenesMenu(false)} />
                    <SubMenuButton subButtonText={'Trabajo'} />
                    <SubMenuButton subButtonText={'Material'} />
                </div>
            ) : (
                ''
            )}
            {centroDesarrollo ? (
                <div className='bg-orange-200 absolute right-1 top-1 flex flex-col h-50 gap-6 p-3 w-full h-full rounded-lg'>
                    <img
                        src={arrowBack}
                        className='h-11 w-11 cursor-pointer'
                        onClick={() => setCentroDesarrollo(false)}
                    />
                    <SubMenuButton subButtonText={'Descripcion'} />
                    <SubMenuButton subButtonText={'Ubicación'} />
                    <SubMenuButton subButtonText={'Reservas'} />
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
