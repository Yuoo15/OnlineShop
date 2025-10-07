import styles from './logo_footer.module.css';
import React from 'react';
import wordmark_black from '../../../assets/wordmark_black.png'
import logo_black from '../../../assets/icon_black.png'
export default()=>{
    return(
        <>
            <div className={styles.logo}>
                <img src={logo_black} alt="Logo" />
                <img src={wordmark_black} alt="Logo" className={styles.word}/>
            </div>
        </>
    )
}