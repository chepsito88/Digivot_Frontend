import React, { useEffect } from 'react';
import '../App.css'
import Cards from '../componentes/CardsAbout'
import Footer from '../componentes/Footer'
import Cookies from 'universal-cookie';

const cookies= new Cookies();

function Nosotros (){
    
useEffect(() => {    
    if(cookies.get('Nombre')){
        window.location.href="/Plataforma";
    }
 });
    return(
        <>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Nosotros;
