import React, { useEffect, useState } from "react";
import Logo from "../logo/logo";
import Burger from "@/modules/burger/burger";
import styles from './Header.module.css'
import User_menu from "../user_menu/user_menu";
import Nav from "../nav/nav";
export default()=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <>
        <header className={styles.header}>
            {windowWidth <= 550 && <Burger />}
            <Logo />
            <Nav />
            <User_menu />
        </header>
        </>
    )
}