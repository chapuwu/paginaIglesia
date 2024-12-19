import { useState, useEffect } from 'react'
import logoHeader from '../img/logo1.png'
import HeaderButton from './HeaderButton'

export default function Header({ showMenu, setShowMenu }) {
    const [smallScreen, setSmallScreen] = useState(false)

    useEffect(() => {
        const checkScrenSize = () => {
            setSmallScreen(window.innerWidth < 900)
        }
        checkScrenSize()
    }, [])

    return smallScreen ? (
        <header className='bg-orange-200 flex justify-center bg-opacity-50 w-full px-4'>
            <div className='container flex justify-between items-center'>
                <a href='/paginaIglesia/'>
                    <img src={logoHeader} alt='' className='h-14 p-2' />
                </a>
                <div className='w-20 flex justify-center h-2/3'>
                    <button
                        className='w-full h-full bg-orange-200 text-logo text-xl hover:bg-orange-300 transition-all rounded-lg'
                        onClick={() => setShowMenu(!showMenu)}>
                        Menu
                    </button>
                </div>
            </div>
        </header>
    ) : (
        <header className='bg-orange-200 flex justify-center bg-opacity-50 w-full px-4'>
            <div className='container flex justify-between items-center'>
                <a href='/paginaIglesia/'>
                    <img src={logoHeader} className='h-14 p-2' />
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
