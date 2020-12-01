import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import '../Css/Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                   Descubre nuestros avances tecnologicos, recibe promociones y novedades  
                </p>
                <p className='footer-subscription-text'>
                    Suscríbete a nuestro boletín informativo
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Tu Correo' />
                        <Button buttonStyle='btn--outline'>Suscribete</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Politicas de Privacidad</h2>
                        <Link to='/'>Privacidad de Datos </Link>
                        <Link to='/'>Seguridad Información</Link>
                        <Link to='/'>Uso de Cookies</Link>
                        <Link to='/'>Uso de la Información</Link>                       
                    </div>
                    <div className='footer-link-items'>
                        <h2>Terminos y Condiciones</h2>
                        <Link to='/'>Introduccion </Link>
                        <Link to='/'>Convenio</Link>
                        <Link to='/'>Licencia</Link>
                        <Link to='/'>Derechos de Autor</Link>                       
                    </div>
                    <div className='footer-link-items'>
                        <h2>Bolsa de Trabajo</h2>
                        <Link to='/'>Desarrollo Web </Link>
                        <Link to='/'>Desarrollo Movil</Link>
                        <Link to='/'>IA</Link>                      
                    </div>
                </div>
            </div>
            <section className='social-media'>
        <div className='social-media-wrap'>

          <small className='website-rights'>GeneSoft S.A. de C.V. © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section> 
            
        </div>
    );
}

export default Footer;

