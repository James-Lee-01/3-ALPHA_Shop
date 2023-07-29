import styles from "./StepProgress.module.css";
import { ReactComponent as CheckIcon } from "../../icons/pg-complete.svg";

function Step({currentStep, step, stepLabel}) {
  return (
    <span className={currentStep >= step ? styles.currentGroup : styles.progressGroup}>
      <span className={styles.progressIcon}>
        <span className={styles.text}> {currentStep > step ? <CheckIcon/> : step} </span>
      </span>
      <span className={styles.progressLabel}>{stepLabel}</span>
    </span>
  )
}

function ProgressBar({currentStep, step}) {
  return (
    <span className={currentStep > step ? styles.progressBarDone : styles.progressBar}>
    </span>
  );
}

function StepProgress({currentStep}) {
  return (
    <div>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <Step currentStep={currentStep} step={1} stepLabel={"寄送地址"}/>
        <ProgressBar currentStep={currentStep} step={1} />
        <Step currentStep={currentStep} step={2} stepLabel={"運送方式"}/>
        <ProgressBar currentStep={currentStep} step={2} />
        <Step currentStep={currentStep} step={3} stepLabel={"付款資訊"}/>
      </section>
    </div>
  );
}

export default StepProgress;