import React from "react";
import styles from './benefits.module.css';
import Button_green from "@/modules/Buttons/green_button/button_green";
import image from '../../../assets/image.png';

export default () => {
    return (
        <div className={styles.container}>
            <div className={styles.info_block}>
                <div className={styles.text}>
                    <h1 className={styles.h1}>Clean and <br />fragrant soy wax</h1>
                    <p className={styles.p}>Made for your home and for your wellness</p>

                    {/* 📱 Мобильная картинка внутри текста */}
                    <img className={styles.img_mobile} src={image} alt="Soy wax mobile" />

                    <ul className={styles.ul}>
                        <li className={styles.li}>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
                        <li className={styles.li}>Hypoallergenic: 100% natural, human friendly ingredients</li>
                        <li className={styles.li}>Handmade: All candles are craftly made with love</li>
                        <li className={styles.li}>Long burning: No more waste. Created to last long.</li>
                    </ul>
                </div>
                <Button_green text="Learn more" />
            </div>

            {/* 🖥️ Десктопная картинка справа */}
            <img className={styles.img_desktop} src={image} alt="Soy wax desktop" />
        </div>
    );
};