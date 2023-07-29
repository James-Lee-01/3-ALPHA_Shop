import styles from "./StepThree.module.css";

function StepThree() {
  return (
    <form data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody}>
        <div className={styles.inputLine1}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input className={styles.inputStyle} type="text" placeholder="John Doe"/>
          </div>
        </div>
        <div className={styles.inputLine2}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>卡號</div>
            <input className={styles.inputStyle} type="text" placeholder="1111 2222 3333 4444"/>
          </div>
        </div>
        <div className={styles.inputLine3}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>有效期限</div>
            <input className={styles.inputStyle} type="text" placeholder="MM/YY"/>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input className={styles.inputStyle} type="text" placeholder="123"/>
          </div>
        </div>
      </section>
    </form>
  )
}

export default StepThree;