import React,{useEffect} from 'react';
import Card from '../componentes/CardCandidatos';

export default function Local() {
        useEffect(() => {     
        
            document.getElementById("Menu").style.display = 'none';
            document.getElementById("sidebarmenu").style.display = 'flex';
        
    },[]);  
    return (
        <div>
            <Card/>
        </div>
    );
}
