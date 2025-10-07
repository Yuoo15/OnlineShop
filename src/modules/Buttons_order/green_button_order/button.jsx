import Cart from '../../../assets/cart_white.png'
import styles from './button.module.css'
export default(props)=>{
    return(
        <>
            <button className={styles.green_button_green}><img src={Cart} className={styles.img}/>+ {props.text}</button>
        </>
    )
}