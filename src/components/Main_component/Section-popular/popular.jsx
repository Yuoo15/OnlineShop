import React, { useEffect, useMemo, useState } from "react";
import styles from './popular.module.css';
import photo_3 from '../../../assets/image 3.png';
import photo_5 from '../../../assets/image 5.png';
import photo_6 from '../../../assets/image 6.png';
import photo_8 from '../../../assets/image 8.png';
import Card from "@/modules/card/card";

export default () => {
    const [look, setLook] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Обновляем ширину окна
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cards = useMemo(()=>{
        return [        
        { id: 3, text: 'Cool Blueberries', photo: photo_3 },
        { id: 5, text: 'Fresh Orange', photo: photo_5 },
        { id: 6, text: 'Fragrant Cinnamon', photo: photo_6 },
        { id: 8, text: 'Clean Lavander', photo: photo_8 },
    ];
})
    // Определяем сколько карточек показывать
    const visibleCards = windowWidth <= 550 && !look ? cards.slice(0, 4) : cards;

    return (   
        <>
        <a id='products'></a>
        <div className={styles.products}>
        <div className={styles.products_vet}>
            <div className={styles.text}>
            <h1 className={styles.h1}>Popular</h1>
            <p className={styles.p}>Our top selling product that you may like</p>
        </div>
            <div className={styles.grid}>
            {visibleCards.map(card => (
                <span key={card.id}>
                <Card text={card.text} photo={card.photo} />
                </span>
            ))}
            </div>
        </div>
        </div>
        </>
    );
};