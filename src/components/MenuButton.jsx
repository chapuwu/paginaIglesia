import React from 'react'
import SubMenuButton from './SubMenuButton'

export default function MenuButton({ texto, iglesiaMenu, setIglesiaMenu, materialMenu, setMaterialMenu }) {
    const subMenu = [
        ['Creemos en...', 'Ubicaciones', 'Agenda', 'Grupos Celulares', 'Asociación Filantrópica', 'Nuestro Pastor'],
        ['Estudios Inductivos', 'Discipulado', 'Otros Escritos', 'Guías de Oración'],
        ['Trabajo', 'Material'],
        ['Descripcion', 'Ubicación', 'Reservas'],
    ]

    function handleClick(texto) {
        if (texto === 'Iglesia') {
            console.log('hola')
        } else if (texto === 'Material') {
            console.log('hola2')
        } else if (texto === 'Niños') {
            console.log('hola3')
        } else if (texto === 'Centro de Desarrollo') {
            console.log('hola4')
        } else if (texto === 'Contacto') {
            console.log('hola5')
        }
    }

    return (
        <div className='gap-6'>
            <button onClick={() => handleClick(texto)} className='text-logo text-2xl font-sans'>
                {texto}
            </button>
            {iglesiaMenu ? (
                <div className='bg-orange-200 absolute right-1 top-1 flex flex-col h-50 gap-6 p-3 w-full rounded-lg'>
                    <img
                        src='../../public/img/arrowBack.png'
                        className='h-11 w-11 cursor-pointer'
                        onClick={() => setIglesiaMenu(false)}
                    />
                    {texto === 'Material' ? (
                        <div>
                            <h1>holaprobando</h1>
                        </div>
                    ) : (
                        ''
                    )}
                    {/* <SubMenuButton subButtonText={'Creemos en...'} />
                    <SubMenuButton subButtonText={'Ubicaciones'} />
                    <SubMenuButton subButtonText={'Agenda'} />
                    <SubMenuButton subButtonText={'Grupos Celulares'} />
                    <SubMenuButton subButtonText={'Asociación Filantrópica'} />
                    <SubMenuButton subButtonText={'Nuestro Pastor'} /> */}
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
