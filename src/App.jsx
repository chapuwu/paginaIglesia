import logoBody from '../public/img/logo2.png'
import BigButton from './components/BigButton'
import Conocenos from './components/Conocenos'
import { useRef } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const conocenosRef = useRef()

    return (
        <div id='app' className='bg-orange-100 h-screen w-screen overflow-auto'>
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
    )
}

export default App
