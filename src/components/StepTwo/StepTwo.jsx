import styles from "./StepTwo.module.css";

function StepTwo() {
  return (
    <form data-phase="shipping">

      <h3 class={styles.formTitle}>運送方式</h3>

      <section class={styles.formBody} >
        <label class={styles.radioGroup } data-price="0">
          
          <input id={styles.inputStyle} type="radio" name="shipping"  checked/>
          
          <div class={styles.radioInfo}>
            <div>
              <div class={styles.text}>標準運送</div>
              <div class={styles.price}></div>
            </div>

            <div class={styles.period}>約 3~7 個工作天</div>
          </div>
          
          <div class={styles.radioBoxBorder}>免費</div>
        </label>
        
        <label class={styles.radioGroup} data-price="500">

          <input id={styles.inputStyle} type="radio" name="shipping" />

          <div class={styles.radioInfo}>
            <div>
              <div class={styles.text}>DHL 貨運</div>
              <div class={styles.price}></div>
            </div>

            <div class={styles.period }>48 小時內送達</div>
          </div>

          <div class={styles.radioBoxBorder}>$500</div>
        </label>
      </section>
    </form>
  )
}

export default StepTwo;