import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../Css/Local.css';

const cookies = new Cookies();
function Card() {
    const [Data, setData] = useState("");
    const AltaCasilla =(id)=>{
        const Mesa=(cookies.get('idMesa'));
        swal({
            title: "Confirmacion...",
            text: "Para aplicar voto presione OK",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((voto) => {
                if (voto) {                                   
                    Axios.post("https://chepsito.herokuapp.com/insertVoto", {
                        Mesa: Mesa,
                        Id: id,
                        Ip:cookies.get('Ip'),  
                    }).then((response) => {
                        if (response.data.message) {
                            swal({
                                title: "Atencion",
                                text: response.data.message,
                                icon: "success",
                                buttons: "Aceptar"
                            });
                            window.location.href = "/Principal";
                        } else {
                            swal({
                                title: "Atencion",
                                text: "Opps ha ocurrido un problema...",
                                icon: "error",
                                buttons: "Aceptar"
                            });
                        }
                    });
                } else {
                    swal("Seleccione un candidato...");
                }
            });
        
    }
    useEffect(() => {           
        Axios.get("https://chepsito.herokuapp.com/Candidatos")
            .then((Response) => {
                setData(Response.data);
            });
    }, []);

    
    return (
        <div className='con-about'>
            <section className='sec-A'>
                <div className='containerA'>
                    <h1 className='heading'>Elecciones Nacionales</h1>

                    <div className='card-wrapperA'>
                        {Object.values(Data).map((item, index) => {
                            return (
                                <div className='cardsA'>
                                    <img src={item.pFoto} alt='' className='card-img' />
                                    <img src={item.cFoto} alt='' className='profile-img' />
                            <h1>{`${item.Nombre} ${item.APaterno} ${item.AMaterno}`}</h1>
                                    <p className='about-text' >
                                        {item.Partido}
                                    </p>
                                    <button key={item.Id} onClick={()=>{AltaCasilla(item.Id)}} className='Votar'>Votar</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Card
