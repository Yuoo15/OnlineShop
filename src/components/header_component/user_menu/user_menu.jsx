import React, { memo } from "react";
import profile from '@/assets/vector.png'
import cart from '@/assets/Cart.png'
import styles from './user_menu.module.css'
const user_menu = memo(()=>{
    return(
        <>
            <div className={styles.div}>
                <a href=""><img src={profile}/></a>
                <a href=""><img src={cart}/></a>
            </div>
        </>
    )
})

export default user_menu