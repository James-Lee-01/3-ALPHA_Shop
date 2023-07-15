import styles from "./StepProgress.module.css";
// import { ReactComponent as CheckIcon } from "../../icons/pg-complete.svg";

function StepProgress() {
  return (
    <div>   
      <h2 class={styles.registerTitle}>結帳</h2>

      <section class={styles.progressContainer}>

        <span class={styles.currentGroup} data-phase="address">
          <span class={styles.progressIcon}>
            <span class={styles.text}>1</span>
            {/* <CheckIcon className={styles.checkIcon}/> */}
          </span>
          <span class={styles.progressLabel}>寄送地址</span>
        </span>

        <span class={styles.progressBar} data-order="1"></span>

        <span class={styles.progressGroup} data-phase="shipping">
          <span class={styles.progressIcon}>
            <span class={styles.text}>2</span>
          </span>
          <span class={styles.progressLabel}>運送方式</span>
        </span>

        <span class={styles.progressBar} data-order="2"></span>

        <span class={styles.progressGroup} data-phase="credit-card">
          <span class={styles.progressIcon}>
            <span class={styles.text}>3</span>
          </span>
          <span class={styles.progressLabel}>付款資訊</span>
        </span>

      </section>
    </div>       
  )
}

export default StepProgress;