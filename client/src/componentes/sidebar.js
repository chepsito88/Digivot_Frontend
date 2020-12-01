import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarItems';
import '../Css/sidebar.css'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const CerrarSesion = () => {
        cookies.remove('Nombre', { path: "/" });
        cookies.remove('Ip', { path: "/" });
        cookies.remove('idMesa',{ path: "/" });//revisar 
        window.location.href = "/Login"
    }


    return (
        <>
            <label id="Iplabel"/>
            <div className='sidebar' id='sidebarmenu' >
                <Link to='#' className='side-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <h1>Bienvenido: {cookies.get('Nombre')}</h1>
            </div>
            <nav className={sidebar ? 'side-menu active' : 'side-menu'} >

                <ul className='side-menu-items' onClick={showSidebar}>
                    <li className='sidebar-toggle'>
                        <Link to="#" className="side-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} id={item.id}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <button className='btn-close' onClick={CerrarSesion}>Logout</button>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;
