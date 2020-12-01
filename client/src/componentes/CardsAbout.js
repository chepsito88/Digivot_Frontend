import React from 'react'

import '../Css/CardsAbout.css'


function CardAbout() {
    return (
        <div className='con-about'>
            <section className='sec-A'>
                <div className='containerA'>
                    <h1 className='heading'>Nuestro Equipo</h1>
                    <div className='card-wrapperA'>
                        <div className='cardsA'>
                            <img src='/imagenes/acerca.jpg' alt='' className='card-img' />
                            <img src='/imagenes/candidatos/c.jpg' alt='' className='profile-img' />
                            <h1>Eusebio Ramírez Hernández</h1>
                            <p className='job-title'>CEO</p>
                            <p className='about-text'>
                                Director Ejecutivo
                        </p>

                        </div>
                        <div className='cardsA'>
                            <img src='/imagenes/acerca.jpg' alt='' className='card-img' />
                            <img src='/imagenes/candidatos/g.jpg' alt='' className='profile-img' />
                            <h1>Gabino Hernández Hernández</h1>
                            <p className='job-title'>CIO</p>
                            <p className='about-text'>
                                Director de TI
                        </p>

                        </div>
                    </div>

                    <div className='card-wrapperA'>
                        <div className='cardsA'>
                            <img src='/imagenes/acerca.jpg' alt='' className='card-img' />
                            <img src='/imagenes/candidatos/l.jpg' alt='' className='profile-img' />
                            <h1>Lesly Hernández Martinez</h1>
                            <p className='job-title'>CMO</p>
                            <p className='about-text'>
                                Director de Marketing
                        </p>

                        </div>
                        <div className='cardsA'>
                            <img src='/imagenes/acerca.jpg' alt='' className='card-img' />
                            <img src='/imagenes/candidatos/s.jpg' alt='' className='profile-img' />
                            <h1>Saúl Trejo Benitez</h1>
                            <p className='job-title'>CFO</p>
                            <p className='about-text'>
                                Director de Finanzas
                        </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CardAbout
