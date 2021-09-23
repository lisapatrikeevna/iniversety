import React from 'react'
import {NavLink} from "react-router-dom"
import cl from "../NavBar.module.css"

const Menu = ({menuItems}) => {
    // const menuItem = menuItems.map(i => <li key={i.id}><a href="">{i.icon}<h5>{i.name}</h5></a></li>)
    const menuItem = menuItems.map(i => {
        let pathName=''
        if(i.name==='Университет'){pathName='main'}
        else{pathName='info'}

       return (<li key={i.id}><NavLink to={`/${pathName}`}>{i.icon}<h5>{i.name}</h5></NavLink></li>)
    })
    return (
        <ul className={cl.navigation}>
            {menuItem}
        </ul>
    );
};

export default Menu;
