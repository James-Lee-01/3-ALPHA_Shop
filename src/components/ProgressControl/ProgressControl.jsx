import styles from "./ProgressControl.module.css";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { CartContext } from "../../context/CartContext";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";

function ProgressControl({currentStep, handleClickPrev, handleClickNext}) {
  const {formInfo} = useContext(FormContext)
  const {allPrice} = useContext(CartContext)

  function handleConfirm() {
    console.log(
      `
      總金額： $${allPrice}
      持卡人姓名：${formInfo.cardName}
      卡號：${formInfo.cardNumber}
      有效期限：${formInfo.cardValid}
      CVC/CCV：${formInfo.cardCvc}
      `
    );
  }

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
        onClick={currentStep === 3 ? handleConfirm : handleClickNext}
        className={styles.next}>
          {currentStep === 3 ? "確認下單" : "下一步"}
          {currentStep < 3 && <RightArrow className={styles.arrowRight}/>}
        </button>
      </section>     
    </section>
  )
}

export default ProgressControl;