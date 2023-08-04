import styles from "./StepThree.module.css";
import { useContext } from "react";
import { FormContext } from "../../../../context/FormContext.js";

function StepThree() {
  const {handleInputChange} = useContext(FormContext)

  return (
    <form data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody}>
        <div className={styles.inputLine1}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input
              className={styles.inputStyle}
              name="cardName"
              type="text"
              placeholder="John Doe"
              onChange={e => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>
        <div className={styles.inputLine2}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>卡號</div>
            <input
              className={styles.inputStyle}
              name="cardNumber"
              type="text"
              placeholder="1111 2222 3333 4444"
              onChange={e => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>
        <div className={styles.inputLine3}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>有效期限</div>
            <input
              className={styles.inputStyle}
              name="cardValid"
              type="text"
              placeholder="MM/YY"
              onChange={e => {
                handleInputChange(e);
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input
              className={styles.inputStyle}
              name="cardCvc"
              type="text"
              placeholder="123"
              onChange={e => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default StepThree;