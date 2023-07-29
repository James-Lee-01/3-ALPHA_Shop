import styles from "./ProgressControl.module.css";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";

function ProgressControl({ currentStep, handleClickPrev, handleClickNext}) {
  return (

    <section className={styles.progressControlContainer}>
      <section className={`${styles.buttonGroup} ${styles.buttonGroup2}`}>
        <button 
        onClick={handleClickPrev}
        className={currentStep === 1 ? `${styles.start}` : `${styles.prev}`}>
          <LeftArrow className={styles.arrowLeft}/>
          上一步
        </button>

        <button 
        onClick={handleClickNext}
        className={styles.next}>
          {currentStep === 3 ? "確認下單" : "下一步"}
          {currentStep < 3 && <RightArrow className={styles.arrowRight}/>}
        </button>
      </section>     
    </section>
  )
}

export default ProgressControl;