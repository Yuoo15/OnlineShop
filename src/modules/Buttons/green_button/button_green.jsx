import React, { memo } from "react";
import styles from "./button_green.module.css"
const Button = memo((props)=>{
    console.log('green button')
    return(
        <>
        <button className={styles.button_m}><a className={styles.a} href={props.href}>{props.text}</a></button>
        </>
    )
})

export default Button