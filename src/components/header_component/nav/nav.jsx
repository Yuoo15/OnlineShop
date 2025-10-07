import React, { memo } from "react";
import Drop from "@/modules/dropdown/drop";
import styles from './nav.module.css'
const Nav = memo(()=>{
    console.log('nav')
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.list_header}>
                    <li><Drop /></li>
                    <li><a href="#" className={styles.link}>About</a></li>
                    <li><a href="#" className={styles.link}>Contact us</a></li>
                </ul>
            </nav>
        </>
    )
})
export default Nav