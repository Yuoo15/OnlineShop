import React, { memo } from "react";
import styles from './heading.module.css'
import Button_green from "@/modules/Buttons/green_button/button_green";
const heading = memo(()=>{
    return(
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>    
        <div className={styles.bg}>
            <div className={styles.inside_bg}>
                <div className={styles.text}>
                <h1 className={styles.h1}>🌱 <br />The nature candle</h1>
                <p className={styles.p}>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p></div>
                <span className={styles.span}><Button_green href="#products" text='Discovery our collection'/></span>
            </div>
        </div>
        </>
    )
})

export default heading