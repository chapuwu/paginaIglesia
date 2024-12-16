import logoBody from '../public/img/logo2.png'
import BigButton from './components/BigButton'
import MenuButton from './components/MenuButton'
import Conocenos from './components/Conocenos'
import { useRef, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const [aviso, setAviso] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [iglesiaMenu, setIglesiaMenu] = useState(false)
    const [materialMenu, setMaterialMenu] = useState(false)
    const [nenesMenu, setNenesMenu] = useState(false)
    const [centroDesarrollo, setCentroDesarrollo] = useState(false)
    const [contacto, setContacto] = useState(false)
    const conocenosRef = useRef()

    return aviso ? (
        <div id='app' className='h-screen w-screen bg-orange-100 overflow-auto'>
            <Header setShowMenu={setShowMenu} showMenu={showMenu} />
            <main className='flex justify-center w-full'>
                {showMenu ? (
                    <div className='bg-orange-200 rounded-lg flex flex-col gap-5 p-3 absolute w-1/3 items-center'>
                        <MenuButton texto={'Iglesia'} iglesiaMenu={iglesiaMenu} setIglesiaMenu={setIglesiaMenu} />
                        <MenuButton texto={'Material'} materialMenu={materialMenu} setMaterialMenu={setMaterialMenu} />
                        <MenuButton texto={'Niños'} nenesMenu={nenesMenu} setNenesMenu={setNenesMenu} />
                        <MenuButton
                            texto={'Centro de Desarrollo'}
                            centroDesarrollo={centroDesarrollo}
                            setCentroDesarrollo={setCentroDesarrollo}
                        />
                        <MenuButton texto={'Contacto'} contacto={contacto} setContacto={setContacto} />
                    </div>
                ) : (
                    ''
                )}
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
            <Footer></Footer>
        </div>
    ) : (
        <div className='bg-orange-100 h-screen w-screen flex justify-center items-center'>
            <div className='bg-orange-200 md:h-3/5 xl:w-1/2 xl:h-1/2 sm:h-3/5 flex flex-col items-center rounded-lg justify-evenly'>
                <h1 className='text-logo text-2xl font-bold font-sans'>Atencion, Esta pagina esta en Desarrollo!</h1>
                <div className='bg-orange-100 w-1/2 flex justify-center h-1/2 items-center'>
                    <p className='text-xl bg-orange-100 w-full lg:text-center '>
                        <b>Este proyecto esta en desarollo</b> y con el tiempo se va a ir agregando mas cosas y
                        arreglando errores visuales para dispositivos moviles, esto es solo una version incompleta del
                        proyecto, Saludos y Bendiciones
                    </p>
                </div>
                <div className='w-28 h-14 flex justify-center'>
                    <button
                        className='text-white font-sans text-xl h-full w-full bg-logo hover:bg-red-600 transition-all'
                        onClick={() => setAviso(true)}>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
