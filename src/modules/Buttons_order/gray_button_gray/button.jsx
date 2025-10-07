import Cart from '../../../assets/cart.png'
import styles from './button.module.css'
export default()=>{
    return(
        <>
            <button className={styles.gray_button_gray}><img src={Cart} /> Big Button</button>
        </>
    )
}