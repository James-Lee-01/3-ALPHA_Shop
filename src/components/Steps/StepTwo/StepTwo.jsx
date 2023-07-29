import styles from "./StepTwo.module.css";
import { useState } from "react";

function StepTwo({setShippingPrice}) {
  const [shipping, setShipping] = useState('standard')
  const handleSelectedShipping = e => setShipping(e.target.id)

  function handleRadioChange(price) {
    setShippingPrice(price)
  }

  return (
    <form data-phase="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.formBody}>
        <label className={styles.radioGroup} onClick={() => handleRadioChange(0)}>
          <input
            className={styles.input}
            id="standard"
            type="radio"
            name="shipping"
            checked={shipping === "standard"}
            onChange={handleSelectedShipping}
          />
          <div className={styles.radioInfo}>
            <div>
              <div className={styles.text}>標準運送</div>
              <div className={styles.price}></div>
            </div>
            <div className={styles.period}>約 3~7 個工作天</div>
          </div>
          <div className={styles.radioBoxBorder}>免費</div>
        </label>
        <label className={styles.radioGroup} onClick={() => handleRadioChange(500)}>
          <input
            className={styles.input}
            id="DHL"
            type="radio"
            name="shipping"
            checked={shipping === "DHL"}
            onChange={handleSelectedShipping}
          />
          <div className={styles.radioInfo}>
            <div>
              <div className={styles.text}>DHL 貨運</div>
              <div className={styles.price}></div>
            </div>
            <div className={styles.period}>48 小時內送達</div>
          </div>
          <div className={styles.radioBoxBorder}>$500</div>
        </label>
      </section>
    </form>
  );
}

export default StepTwo;