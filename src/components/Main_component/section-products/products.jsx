    import React, { useEffect, useState } from "react";
    import styles from './products.module.css';
    import { cards } from "../../../data/cards"; // импорт массива
    import Card from "@/modules/card/card";
    import { Link } from "react-router-dom";

    export default function Products() {
    const [look, setLook] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCards = windowWidth <= 550 && !look ? cards.slice(0, 4) : cards;

    return (
        <>
        <a id='products'></a>
        <div className={styles.products}>
            <div className={styles.products_vet}>
            <div className={styles.text}>
                <h1 className={styles.h1}>Products</h1>
                <p className={styles.p}>Order it for you or for your beloved ones</p>
            </div>

            <div className={styles.grid}>
                {visibleCards.map(card => (
                <span key={card.id}>
                    <Link to={`/products/${card.id}`} className={styles.link}>
                    <Card text={card.text} photo={card.photo} price={card.price}/>
                    </Link>
                </span>
                ))}
            </div>

            {windowWidth <= 550 && (
                <button onClick={() => setLook(!look)} className={styles.button}>
                {look ? 'See less' : 'See more'}
                </button>
            )}
            </div>
        </div>
        </>
    );
    }
