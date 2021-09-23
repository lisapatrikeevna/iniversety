import React, {useState} from 'react';
import cl from './NavBar.module.css'
import Menu from "./menu/menu";
import {menuItems} from "../utils/menuData";
import {FaUserCircle} from "react-icons/fa";
import {IoIosArrowDropleftCircle} from "react-icons/io";

const NavBar = () => {
    let [collapse, setCollapse] = useState(false)
    let onStyle = {
        width: collapse ? "320px" : "0",
        display: collapse ? "block" : "none"
    }
    const onClickHandler = (e) => {
        e.stopPropagation()
        setCollapse(!collapse)
    }

    return (
        <nav >
            <div className={cl.menu} style={onStyle}>
                <header className={cl.header}></header>
                <div className={cl.container}>
                    <Menu menuItems={menuItems}/>
                    <div className={cl.userInfo}>
                        <FaUserCircle/>
                        <h5>Бил Гейтс</h5>
                    </div>
                </div>
            </div>
            <btn className={cl.arrow} onClick={onClickHandler}>
                <IoIosArrowDropleftCircle/>
            </btn>

        </nav>
    )

}
export default NavBar;
