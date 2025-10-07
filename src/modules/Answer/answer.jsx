import React from "react";
import styles from './anser.module.css';

export default(props)=>{
    const stars = [
        {id: 1, star: '★'},
        {id: 2, star: '★'},
        {id: 3, star: '★'},
        {id: 4, star: '★'},
        {id: 5, star: '★'},
    ]
    return(
        <>
        <div className={styles.div}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={props.img} alt="Фото" />
                <div className={styles.rating}>
                    {stars.map((item) => (
                        <span key={item.id} className={`${styles.star} ${props.rating >= item.id ? styles.active : styles.inactive}`}>{item.star}</span>
                    ))}
                </div>
            </div>
            <h1 className={styles.h1}>“{props.title}”</h1>
            <p className={styles.p}>{props.name}</p>
        </div>
        </>
    )
}