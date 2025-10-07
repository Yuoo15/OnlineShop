import { useState } from "react"
import styles from './count.module.css'
export default()=>{
    const[count, setCount] = useState(1)
    console.log(count)
    function p(){
        setCount(count+1)
    }
    function m(){
        if(count === 0){
            return
        }
        setCount(count - 1)
    }
    return(
        <>
        <div className={styles.content}>
            <p className={styles.p}>Quantity</p>
        <span className={styles.count}>
            <button onClick={p} className={styles.button}>+</button>
            <span>{count}</span>
            <button onClick={m} className={styles.button}>-</button>
        </span></div>
        </>
    )
}