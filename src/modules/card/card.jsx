import React, { memo } from "react";
import styles from './card.module.css'

const Card = memo((props)=>{
    console.log('card')
    return(
        <>
            <div className={styles.card}>
                <div className={styles.photo}>
                    <img src={props.photo}/>
                </div>
                <div className={styles.des}>
                    <h2 className={styles.h2}>{props.text}</h2>
                    <p className={styles.p}>{props.price}</p>
                </div>
            </div>
        </>
    )
})

export default Card