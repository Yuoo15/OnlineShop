import React, { useState } from 'react';
import styles from './burger.module.css';
import Drop from '../dropdown/drop';

export default function BurgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.burgerContainer}>
        <div
            className={`${styles.burgerIcon} ${open ? styles.open : ''}`}
            onClick={() => setOpen(!open)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav className={`${styles.burgerMenu} ${open ? styles.active : ''}`}>
            <ul className={styles.nav}>
                <li className={styles.nav__item}><Drop/></li>
                <li className={styles.nav__item}><a href="#">About</a></li>
                <li className={styles.nav__item}><a href="#">Contact us</a></li>
            </ul>
        </nav>
        </div>
    );
}