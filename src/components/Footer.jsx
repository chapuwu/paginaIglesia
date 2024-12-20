import React from 'react'
import mailIcon from '../img/mail.png'
import fbIcon from '../img/fbIcon.svg'

export default function Footer() {
    return (
        <footer className='w-full bg-logo flex-col flex items-center'>
            <h1 className='text-white xl:text-4xl py-5'>Nos gustaría que nos contactes</h1>
            <div className='w-full flex flex-row justify-center'>
                <div className='flex flex-row justify-center xl:h-12 gap-3 items-center w-1/5 hover:bg-orange-200 transition-all rounded-md'>
                    <img src={mailIcon} alt='' className='xl:h-8' />
                    <a href='mailto:info@pueblonuevobautista.com' className='text-white font-sans text-xl'>
                        info@pueblonuevobautista.com
                    </a>
                </div>
                <div className='flex flex-row justify-center xl:h-12 gap-3 items-center xl:w-1/5 hover:bg-orange-200 transition-all rounded-md'>
                    <img src={fbIcon} alt='' className='xl:h-9 hover:bg-logo' />
                    <a
                        href='https://www.facebook.com/iglesiapueblonuevoberisso/'
                        className='text-white font-sans text-xl'>
                        Iglesia Pueblo Nuevo Berisso
                    </a>
                </div>
            </div>
        </footer>
    )
}
