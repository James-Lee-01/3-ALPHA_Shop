import styles from "./ProgressControl.module.css";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";

function ProgressControl() {
  return (
    <section class={styles.progressControlContainer}>
      <section class={`${styles.buttonGroup} ${styles.buttonGroup1}`} data-phase="address">
        <button class={styles.next}>
          下一步
          <RightArrow className={styles.arrowRight}/>
        </button>
      </section>

      <section class={`${styles.buttonGroup} ${styles.buttonGroup2}`} data-phase="shipping">
        <button class={styles.prev}>
          <LeftArrow className={styles.arrowLeft}/>
          上一步
        </button>

        <button class={styles.next}>
          下一步
          <RightArrow className={styles.arrowRight}/>
        </button>
      </section>

      <section class={`${styles.buttonGroup} ${styles.buttonGroup3}`} data-phase="credit-card">
        <button class={styles.prev}>
          <LeftArrow className={styles.arrowLeft}/>
          上一步
        </button>
        <button class={styles.next}>
          確認下單
        </button>
      </section>
      
    </section>
  )
}

export default ProgressControl;