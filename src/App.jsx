import logoBody from '../public/img/logo2.png'
import BigButton from './components/BigButton'
import Conocenos from './components/Conocenos'
import { useRef, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const [aviso, setAviso] = useState(false)
    const conocenosRef = useRef()

    return aviso ? (
        <div id='app' className='h-screen w-screen bg-orange-100 overflow-auto'>
            <Header />
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
            <Footer></Footer>
        </div>
    ) : (
        <div className='bg-orange-100 h-screen w-screen flex justify-center items-center'>
            <div className='bg-orange-200 h-1/2 w-1/2 flex flex-col items-center rounded-lg justify-evenly'>
                <h1 className='text-logo text-2xl font-bold font-sans'>Atencion, Esta pagina esta en Desarrollo!</h1>
                <div className='bg-orange-100 w-1/2 flex justify-center h-1/2 items-center'>
                    <p className='text-xl bg-orange-100 w-11/12'>
                        <b>Este proyecto esta en desarollo</b> y con el tiempo se va a ir agregando mas cosas y
                        arreglando errores visuales para dispositivos moviles y con errores visuales, esto es solo una
                        version incompleta del proyecto, Saludos y Bendiciones
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