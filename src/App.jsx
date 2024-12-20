import logoBody from './img/logo2.png'
import BigButton from './components/BigButton'
import MenuButton from './components/MenuButton'
import Conocenos from './components/Conocenos'
import { useRef, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import CreemosEn from './components/CreemosEn'
import { useNavigate } from 'react-router-dom'

function App() {
    const [aviso, setAviso] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [iglesiaMenu, setIglesiaMenu] = useState(false)
    const [materialMenu, setMaterialMenu] = useState(false)
    const [nenesMenu, setNenesMenu] = useState(false)
    const [centroDesarrollo, setCentroDesarrollo] = useState(false)
    const [contacto, setContacto] = useState(false)
    const conocenosRef = useRef()
    const creenciasRef = useRef()
    const navigate = useNavigate()

    return aviso ? (
        <div id='app' className='h-screen w-screen scroll-smooth bg-orange-100 overflow-auto'>
            <Header setShowMenu={setShowMenu} showMenu={showMenu} />
            <main className='flex justify-center w-full min-h-full'>
                {showMenu ? (
                    <div className='bg-orange-200 rounded-lg flex flex-col gap-8 p-3 fixed z-20 w-1/2 items-center'>
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
                        <img src={logoBody} alt='' className='xl:h-80 h-28' />
                    </div>
                    <h2 className='text-logo xl:text-5xl my-6 text-2xl font-sans'>Una Iglesia, muchos lugares</h2>
                    <BigButton scrollTo={conocenosRef} className='my-12'>
                        Conocenos
                    </BigButton>
                    <Conocenos conocenosRef={conocenosRef} />
                    <BigButton className='my-12' scrollTo={creenciasRef}>
                        Creemos En...
                    </BigButton>
                    <CreemosEn creenciasRef={creenciasRef} />
                    <BigButton className='mb-9'>Ubicaciones</BigButton>
                </div>
            </main>
            <Footer></Footer>
        </div>
    ) : (
        <div className='bg-orange-100 h-screen w-screen flex justify-center items-center'>
            <div className='bg-orange-200 xl:w-1/2 xl:h-1/2 flex flex-col items-center xl:rounded-lg justify-evenly h-3/5 '>
                <h1 className='text-logo xl:text-2xl font-bold xl:font-sans text-lg'>
                    Atencion, Esta pagina esta en Desarrollo!
                </h1>
                <div className='bg-orange-100 xl:w-1/2 flex justify-center h-1/2 items-center w-10/12 rounded-lg'>
                    <p className='xl:text-xl text-center flex w-11/12 text-lg flex-col items-center'>
                        <b>Este proyecto esta en desarollo</b> y con el tiempo se va a ir agregando mas cosas y
                        arreglando errores visuales para dispositivos moviles, esto es solo una version incompleta del
                        proyecto, Saludos y Bendiciones
                    </p>
                </div>
                <div className='w-28 h-14 flex justify-center'>
                    <button
                        className='text-white font-sans xl:text-xl rounded-lg text-lg h-full w-full bg-logo hover:bg-red-600 transition-all'
                        onClick={() => setAviso(true)}>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
