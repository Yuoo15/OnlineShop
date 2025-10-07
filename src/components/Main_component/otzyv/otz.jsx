import React from "react";
import styles from "./otz.module.css";
import Answer from "@/modules/Answer/answer";
import avatar from '../../../assets/img.png';
import avatar_1 from '../../../assets/bg.png';
import avatar_2 from '../../../assets/bg_1.png';
export default ()=>{
    const info = [
        {id: 1, name:'Lucia', title: "Отличный магазин!, все супер и быстро", rating: 5, img: avatar},
        {id: 2, name:'Marco', title: "Очень доволен покупкой. Рекомендую!", rating: 4, img: avatar_1},
        {id: 3, name:'Anna', title: "Качество товара на высшем уровне.", rating: 3, img: avatar_2},
    ]
    return(
        <>
        <div className={styles.container}>
            <span className={styles.span}>
                <h1 className={styles.h1}>Testimonials</h1>
                <p className={styles.p}>Some quotes from our happy customers</p>
            </span>
            <div className={styles.reviews}>
                {info.map((item) => (
                    <Answer key={item.id} name={item.name} title={item.title} rating={item.rating} img={item.img} />
                ))}
            </div>
        </div>
        </>
    )
}