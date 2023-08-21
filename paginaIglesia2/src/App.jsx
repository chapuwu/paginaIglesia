import logoHeader from '../public/img/logo1.png'
import HeaderButton from './components/HeaderButton'
import logoBody from '../public/img/logo2.png'
import BigButton from './components/BigButton'
import Conocenos from './components/Conocenos'
import { useRef } from 'react'

function App() {
    const conocenosRef = useRef()

    return (
        <div id='app' className='bg-orange-100 h-screen w-screen overflow-auto'>
            <header className='bg-orange-200 flex justify-center bg-opacity-50 w-full px-4'>
                <div className='container flex justify-between items-center'>
                    <a href='/'>
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
            <main className='flex justify-center w-full'>
                <div className='container flex items-center flex-col'>
                    <div className='my-6'>
                        <img src={logoBody} alt='' className='h-80' />
                    </div>
                    <h2 className='text-logo text-5xl my-6'>Una Iglesia, muchos lugares</h2>
                    <BigButton scrollTo={conocenosRef} className='my-12'>
                        Conocenos
                    </BigButton>
                    <Conocenos conocenosRef={conocenosRef} />
                </div>
            </main>
        </div>
    )
}

export default App
