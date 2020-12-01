import React, { useEffect } from 'react';
import '../App.css'
import Genesoft from '../componentes/genesoftSection'
import Card from '../componentes/Cards'
import Footer from '../componentes/Footer'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Home (){
    useEffect(() => {    
        if(cookies.get('Nombre')){
            window.location.href="/Plataforma";
        }
     });
    return(
        <>
            <Genesoft/>
            <Card/>
            <Footer/>
        </>
    );
}

export default Home;