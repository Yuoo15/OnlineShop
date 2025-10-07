import { useState } from "react";
import styles from './checkbox.module.css'
export default () => {
    const [selected, setSelected] = useState(null);

    function handleChange(event) {
        const value = event.target.value;
        setSelected(value);
    }

    return (
        <>
        <form className={styles.form}>
            <span className={styles.span} style={selected === "option1" ? { border: '1px solid #E5E5E5', borderRadius: 5} : {}}>
            <label>
                <input
                    type="radio"
                    name="first"
                    value="option1"
                    onChange={handleChange}
                    style={{marginRight: 10}}
                />
                <b>One time purchasetif</b>
            </label></span>
            <br />
            <span className={styles.span}style={selected === "option2" ? { border: '1px solid #E5E5E5', borderRadius: 5} : {}}>
            <label>
                <input
                    type="radio"
                    name="first"
                    value="option2"
                    onChange={handleChange}
                    style={{marginRight: 10}}
                />
                <b>Subscribe and delivery every </b>
                <p style={{marginTop:10}}>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout.</p>
            </label></span>
        </form>
        </>
    );
};