import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import { Line } from '@ant-design/charts';
const cookies = new Cookies();
export default function Reportes() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        if (!cookies.get('Nombre')) {
            window.location.href = "/Login";
        } else {
            document.getElementById("Menu").style.display = 'none';
            document.getElementById("sidebarmenu").style.display = 'flex';
        }

        Axios.post("https://chepsito.herokuapp.com/Reportes", {
            Mesa: cookies.get('idMesa'),
            Tipo: 1,
        }).then((response) => {
            setdata(response.data);
        });

    }, []);
    const configuracion = {
        data,
        title: {
            visible: true,
            text: "Reporte de eleccion por casilla"
        },
        xField: "Partido",
        yField: "TotalVotos",
        color: '#2593fc',
        point: {
            visible: true,
            size: 15,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2
            }
        }
    }
    return (
        <div className='Reportes'>
            <div>
            <h1> Resultados Nacionales </h1>
            </div>
            <div>
                <Line {...configuracion} />
            </div>
        </div>
    );
};

