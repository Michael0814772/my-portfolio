import React from 'react'
import { MenuList } from './MenuList';
import './Navbar.css'
import { useState } from 'react';

function Navbar() {

    const [clicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!clicked);
    }

    const menulList = MenuList.map(({ title, url }, index) => {
        return (
            <li key={index}>
                <a href={url}>{title}</a>
            </li>
        )
    })


    return (
        <>
            <nav>
                <div className="logo">
                    Mich<font>ael</font>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? "menu-list" : "menu-list close"}>
                    {menulList}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
