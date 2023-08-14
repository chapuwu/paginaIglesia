import { useState } from 'react'
import logoHeader from '../public/img/logo1.png'
import HeaderButton from './components/headerButton'
import logoBody from '../public/img/logo2.png'
import BigButton from './components/BigButton'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div id='app' className='bg-orange-100 h-screen w-screen scroll-auto'>
            <header className='bg-orange-200 bg-opacity-50 w-full'>
                <div className='container flex justify-between px-4 items-center'>
                    <a href='/'>
                        <img src={logoHeader} alt='' className='h-14 p-2' />
                    </a>
                    <div className='flex items-center gap-8'>
                        <HeaderButton buttonText='Iglesia' dropdown />
                        <HeaderButton buttonText='Material' dropdown />
                        <HeaderButton buttonText='Ninios' dropdown />
                        <HeaderButton buttonText='Centro de desarrollo' dropdown />
                        <HeaderButton buttonText='Contacto' />
                    </div>
                </div>
            </header>
            <main className='container flex items-center flex-col'>
                <div className='my-6'>
                    <img src={logoBody} alt='' className='h-80' />
                </div>
                <h2 className='text-logo font-logo text-5xl my-6'>Una Iglesia, muchos lugares</h2>
                <BigButton className='my-12'>Conocenos</BigButton>
            </main>
        </div>
    )
}

export default App
