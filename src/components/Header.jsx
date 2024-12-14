import React from 'react'
import logoHeader from '../../public/img/logo1.png'
import HeaderButton from './HeaderButton'

export default function Header() {
    return (
        <header className='bg-orange-200 flex justify-center bg-opacity-50 w-full px-4'>
            <div className='container flex justify-between items-center'>
                <a href='/paginaIglesia/'>
                    <img src={logoHeader} alt='' className='h-14 p-2' />
                </a>
                <div className='flex items-center gap-8'>
                    <HeaderButton buttonText='Iglesia'>
                        <a href='#'>Creemos en...</a>
                        <a href='#'>Ubicaciones</a>
                        <a href='#'>Agenda</a>
                        <a href='#'>Grupos Celulares</a>
                        <a href='#'>Asociacion Filantrópica</a>
                        <a href='#'>Nuestro Pastor</a>
                    </HeaderButton>
                    <HeaderButton buttonText='Material'>
                        <a href='#'>Estudios Inductivos</a>
                        <a href='#'>Discipulados</a>
                        <a href='#'>Otros Escritos</a>
                        <a href='#'>Guias De Oración</a>
                    </HeaderButton>
                    <HeaderButton buttonText='Niños'>
                        <a href='#'>Trabajo</a>
                        <a href='#'>Material</a>
                    </HeaderButton>
                    <HeaderButton buttonText='Centro de desarrollo'>
                        <a href='#'>Descripción</a>
                        <a href='#'>Ubicación</a>
                        <a href='#'>Reservas</a>
                    </HeaderButton>
                    <HeaderButton buttonText='Contacto'></HeaderButton>
                </div>
            </div>
        </header>
    )
}
