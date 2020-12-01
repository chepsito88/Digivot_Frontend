import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import '../Css/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar' id ="Menu">
                <div className='navbar-container'>
                    <i className='logo' />
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        GeneSoft
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Servicios' className='nav-links' onClick={closeMobileMenu}>
                                Servicios
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Nosotros' className='nav-links' onClick={closeMobileMenu}>
                                Acerca de
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contacto' className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sing Up
                            </Link>
                        </li>
                    </ul>
                    <div className='container-btn'>
                    {button && <Button buttonStyle='btn--outline'>Sing Up</Button>}

                    </div>
                    
                </div>

            </nav>

        </>
    )
}

export default Navbar
