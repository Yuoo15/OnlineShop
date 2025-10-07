import React, { memo } from "react";
import styles from './logo.module.css'
import Logo from '@/assets/icon.jpg'
import Text_logo from '@/assets/wordmark.png'
const logo = memo(()=>{
    console.log('logo')
    return(
        <>
        <a href="">
        <div className={styles.logo}>
            <img src={Logo}></img>
            <img src={Text_logo}></img>
        </div>
        </a>
        </>
    )
})

export default logo