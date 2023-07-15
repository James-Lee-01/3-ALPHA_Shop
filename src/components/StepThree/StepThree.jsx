import styles from "./StepThree.module.css";

function StepThree() {
  return (
    <form data-phase="credit-card">

      <h3 class={styles.formTitle}>付款資訊</h3>

      <section class={styles.formBody}>

        <div class={styles.inputLine1}>
          <div class={styles.inputGroup}>
            <div class={styles.inputLabel}>持卡人姓名</div>
            <input className={styles.inputStyle} type="text" placeholder="John Doe" />
          </div>
        </div>

        <div class={styles.inputLine2}>
          <div class={styles.inputGroup}>
            <div class={styles.inputLabel}>卡號</div>
            <input className={styles.inputStyle} type="text" placeholder="1111 2222 3333 4444" />
          </div>
        </div>

        <div class={styles.inputLine3}>
          <div class={styles.inputGroup}>
            <div class={styles.inputLabel}>有效期限</div>
            <input className={styles.inputStyle} type="text" placeholder="MM/YY" />
          </div>

          <div class={styles.inputGroup}>
            <div class={styles.inputLabel}>CVC / CCV</div>
            <input className={styles.inputStyle} type="text" placeholder="123" />
          </div>
        </div>

      </section>
    </form>
  )
}

export default StepThree;