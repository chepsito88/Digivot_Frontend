import React, { useEffect} from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import '../App.css'
import '../Css/principal.css';
const cookies = new Cookies();
export default function Principal() {
    setInterval(()=>{
        Axios.post("https://chepsito.herokuapp.com/sesionCasilla", {
            Ip:cookies.get('Ip') ,
            Mesa:cookies.get('idMesa'),
        }).then((response)=>{
            const valor=response.data[0];
            if(valor.Estado==="1"){                
                window.location.href="/Local";   
            }     
        });
      }, 1000*4);
    

    useEffect(() => {     
        if (!cookies.get('Nombre')) {
            window.location.href = "/Login";
        } else {
            document.getElementById("Menu").style.display = 'none';
            document.getElementById("sidebarmenu").style.display = 'flex'; 
            document.getElementById("con").style.display='none';                    
        }
    },[]);   
    return (
        <div>
            <h1 className='Principal'>Espere un momento....</h1>
        </div>);
}
