import React from 'react'
import bautismoImg from '../img/bautismo1.jpg'
import bautismoImg2 from '../img/bautismo2.jpg'

export default function Bautismo() {
    return (
        <div className='xl:w-full w-11/12 bg-orange-200 rounded-lg mt-4'>
            <h2 className='text-logo xl:text-3xl text-2xl text-center my-3 font-sans font-bold'>Bautismo</h2>
            <div className='xl:flex-row flex-col items-center xl:justify-normal xl:items-start flex px-3 pb-3 '>
                <img src={bautismoImg} alt='' className='xl:h-64 h-40' />
                <div className='mx-4 my-2'>
                    <p className='text-logo xl:text-xl text-lg font-sans text-center'>
                        Después de un genuino arrepentimiento seguido de una aceptación sincera a Jesucristo en el
                        corazón y un decidido reconocimiento de su autoridad como Señor, (todo esto significa “creer en
                        Cristo”) el siguiente paso es el bautismo.
                    </p>
                    <p className='text-lg  text-center font-sans '>
                        Jesucristo dijo:{' '}
                        <q className='italic'>
                            El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado.
                        </q>{' '}
                        <sub className='text-lg'>(Marcos 16:16)</sub>
                    </p>
                    <ul className='list-disc mx-4 my-4 xl:text-xl text-center text-lg font-sans'>
                        <li className='m-4'>
                            <h3>ES POR INMERSION POR RAZONES ETIMOLOGICAS.</h3>
                            <p className='xl:text-lg text-base'>
                                Simplemente porque la palabra “bautismo” significa “inmersión”
                            </p>
                        </li>
                        <li className='m-4'>
                            <h3>ES POR INMERSION POR RAZONES TEOLOGICAS</h3>
                            <p className='xl:text-lg text-base'>
                                El bautismo debe ser por inmersión porque interpreta la muerte, la sepultura y la
                                resurrección de Jesucristo. Y dentro de este hecho histórico estamos incluidos todos
                                aquellos que hemos creído en Él.
                            </p>
                        </li>
                        <li className='m-4'>
                            <h3>ES POR INMERSION POR RAZONES ECLESIOLOGICAS.</h3>
                            <p className='xl:text-lg text-base'>
                                El bautismo por inmersión es también una figura que representa la incorporación del
                                nuevo creyente a la iglesia, que es el Cuerpo de Cristo. El bautismo por inmersión es un
                                bautizo efectuado sumergiendo totalmente en agua a la persona que se bautiza. El
                                bautismo por inmersión es diferente al bautismo por aspersión. Al aceptar a Cristo nos
                                identificamos con él en su muerte, su sepultura y su resurrección. Así que, en Cristo
                                somos personas nuevas. El bautismo en agua simboliza la transformación que ocurrió en el
                                momento de nuestra salvación. El bajar al agua, simboliza nuestra identificación con
                                Cristo en su muerte y sepultura. El subir del agua simboliza nuestra resurrección a una
                                vida nueva.
                            </p>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
            <div className='px-3 pb-3 flex xl:flex-row flex-col items-center xl:items-start'>
                <img src={bautismoImg2} alt='' className='xl:h-80 h-64 xl:w-72 w-56' />
                <p className='text-logo text-2xl font-sans font-bold px-6 xl:py-0 py-6 text-center'>
                    El bautismo no es opcional, sino es un mandato para ser obedecido por cada creyente. Con el bautismo
                    damos testimonio público de que ya somos salvos.
                </p>
            </div>
        </div>
    )
}
