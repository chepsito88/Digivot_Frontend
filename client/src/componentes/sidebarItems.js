import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as KoIcons from 'react-icons/md';


export const SidebarData=[
    {
        title:'Configuracion',
        path:'/Plataforma',
        icon:<IoIcons.IoIosBook/>,
        cName:'side-text',
        id:'con'
    },
    {
        title:'Principal',
        path:'/Principal',
        icon:<KoIcons.MdGavel/>,
        cName:'side-text',
        id:'prin'
    },
    {
        title:'Reportes',
        path:'/Reportes',
        icon:<KoIcons.MdShowChart/>,
        cName:'side-text',
        id:'repor'
    }
];