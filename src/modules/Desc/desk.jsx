
import { useParams } from "react-router-dom"
import styles from './desk.module.css'
import { cards } from "../../data/cards"; 
import H_f from "@/components/h_f/h_f";
import Count from "../count/count";
import Checkbox from "../checkbox/checkbox";
import Button from "../Buttons_order/green_button_order/button";

export default ()=>{
    const{ id }= useParams()
    const card = cards.find(item => item.id === Number(id))
    return(
        <>
        <H_f>
            <div className={styles.cont}>
                <div className={styles.first}>
                    <h1 className={styles.h1_mobile}>{card.text}®</h1>
                    <div className={styles.image}><img src={card.photo} alt={card.text} /></div>
                    <div className={styles.inf}>
                        <p className={styles.opp}>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
                        <p className={styles.free}>🚚 FREE SHIPPING</p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <h1 className={styles.h1}>{card.text}®</h1>
                        <div className={styles.flex}>
                            <div className={styles.buy}>
                                <p className={styles.price}>{card.price}</p>
                                <Count />
                            </div>
                            <div>
                                <Checkbox />
                                <Button text='Add to cart'/>
                            </div>
                        
                        </div>
                    </div>
                            <div className={styles.dis}>
                                <p><b>Wax:</b> Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                                <p className={styles.center}><b>Fragrance: </b>Premium quality ingredients with natural essential oils </p>
                                <span>
                                    <p><b>Burning Time:</b> 70-75 hours</p>
                                    <p><b>Dimension:</b> 10cm x 5cm </p>
                                    <p><b>Weight:</b> 400g </p>
                                </span>
                            </div>
                            </div>
                    <div className={styles.inf_mobile}>
                        <p className={styles.opp}>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
                        <p className={styles.free}>🚚 FREE SHIPPING</p>
                    </div>
            </div>
        </H_f>
        </>
    )
}