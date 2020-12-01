import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import '../Css/login.css';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { Button } from '../componentes/Button';
const cookies= new Cookies();

export default function Login() {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        Axios.post("https://chepsito.herokuapp.com/login",{
            username: username,
            password:md5(password),
        }).then((response) => {
            if(response.data.message){
                swal({
                    title: "Atencion",
                    text:response.data.message,
                    icon:"error",
                    buttons:"Aceptar"
                });
            }else{
                var respuesta=response.data[0];
                cookies.set('Nombre', respuesta.Nombre, { path: '/' });                
                swal("Bienvenido: "+cookies.get('Nombre'));                  
                window.location.href="/Plataforma";               
            }            
        });
    };

    useEffect(() => {    
        if(cookies.get('Nombre')){
            window.location.href="/Plataforma";
        }
     });

    return <div className='login'>
        <div className='login-container'>
            
            <div className='login-user'>
                <img src="/imagenes/login1.png" alt="l" />
            </div>

            <input type="text" placeholder="Usuario" onChange={(e) => {
                setUsername(e.target.value);
            }} />
            <input type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value);
            }} />
            <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large' onClick={register}>Acceder <i className='fas fa-sign-in-alt' />
            </Button>
        </div>
    </div>;
}
