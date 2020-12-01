import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import '../App.css'

const cookies = new Cookies();
function Servicios (){
    useEffect(() => {    
        if(cookies.get('Nombre')){
            window.location.href="/DigiVot";
        }
     });
    return(
        <>
            <h1 className='Servicios'>Espere un momento ...</h1>
        </>
    );
}

export default Servicios;