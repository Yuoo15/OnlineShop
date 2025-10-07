import Cart from '../../../assets/green_cart.png'
import styles from './button.module.css'
export default()=>{
    return(
        <>
            <button className={styles.white_button_white}><img src={Cart} /> Big Button</button>
        </>
    )
}