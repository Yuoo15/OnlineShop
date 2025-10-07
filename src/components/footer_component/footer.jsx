import styles from './footer.module.css'
import React from 'react'
import Logo_footer from './logo/logo_footer'
export default()=>{
    return(
        <>
        <footer>
            <hr className={styles.hr}/>
            <div className={styles.footerContainer}>
                <div className={styles.logoContainer}>
                    <Logo_footer />
                    <p className={styles.p}>Your natural candle made for your home and for your wellness.</p>
                </div>
                <div className={styles.linksContainer}>
                    <div>
                        <ul className={styles.ul}>
                            <li className={styles.li}>Discovery</li>
                            <li className={styles.li}>New season</li>
                            <li className={styles.li}>Most searched</li>
                            <li className={styles.li}>Most selled</li>
                        </ul>
                        
                    </div>
                    <div>
                        <ul className={styles.ul}>
                            <li className={styles.li}>About</li>
                            <li className={styles.li}>Help</li>
                            <li className={styles.li}>Shipping</li>
                            <li className={styles.li}>Affiliate</li>
                        </ul>
                        
                    </div>
                    <div>
                        <ul className={styles.ul}>
                            <li className={styles.li}>Info</li>
                            <li className={styles.li}>Contact us</li>
                            <li className={styles.li}>Privacy Policies</li>
                            <li className={styles.li}>Terms & Conditions</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </footer>
        <div className={styles.fake}>
            <p className={styles.copy}>©Candleaf All Rights Reserved.</p>
        <p className={styles.copy}>By @Ramazan</p></div>
        </>
    )
}