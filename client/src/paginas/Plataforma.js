import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';
import '../Css/Plataforma.css';
const cookies = new Cookies();

export default function Plataforma() {

    const [data, setdata] = useState("");
    const [Mesa, setMesa] = useState(0);
    const [Ip, setIp] = useState("");
    const [Nombre, SetNombre] = useState("");

    const AltaCasilla = () => {
        if (Nombre.length === 0 || Ip.length===0 || Mesa===0){
            swal({
                title: "Atencion",
                text: "Campos Vacios",
                icon: "error",
                buttons: "Aceptar"
            });
        } else {
            Axios.post("https://chepsito.herokuapp.com/insertCasilla", {
                Mesa: Mesa,
                Ip: Ip,
                Nombre: Nombre,
            }).then((response) => {
                if (response.data.message) {
                    swal({
                        title: "Atencion",
                        text: response.data.message,
                        icon: "success",
                        buttons: "Aceptar"
                    });
                    cookies.set('Ip', Ip, { path: '/' });
                    cookies.set('idMesa', Mesa, { path: '/' });
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
        }
    };

    useEffect(() => {
        if (!cookies.get('Nombre')) {
            window.location.href = "/Login";
        } else {
            document.getElementById("Menu").style.display = 'none';
            document.getElementById("sidebarmenu").style.display = 'flex';
        }
        Axios.get("https://chepsito.herokuapp.com/Casillas")
            .then((Response) => {
                setdata(Response.data);
            });
    }, []);
    return (
        <div className='Plataforma'>
            <div className='p-container' id='configuracion'>
                <div className='titulo'>
                    Configuración de Casilla
                </div>
                <select className='combo' onChange={(e) => {
                    const valor = e.target.value;
                    setMesa(valor);
                }} defaultValue='Default'>
                    <option value="Default" disabled>Seleccione Mesa</option>
                    {
                        Object.values(data).map(elemento => (
                            <option key={elemento.Id} value={elemento.Id} >{elemento.Nombre}</option>
                        )
                        )}
                </select>
                <input type="text"  value={Nombre} placeholder="Nombre de Casilla" onChange={(e) => {
                    SetNombre(e.target.value);
                }} />
                <input type="text" value={Ip} placeholder="Direccion Ip" onChange={(e) => {
                    setIp(e.target.value);
                }} />
                <button className='btn' onClick={AltaCasilla}>Registrar</button>
            </div>
        </div>
    );
};

