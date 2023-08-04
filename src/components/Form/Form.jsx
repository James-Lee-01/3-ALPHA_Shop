import { useState } from "react";
import { FormContextProvider } from "../../context/FormContext.js"
import StepProgress from "./StepProgress/StepProgress.jsx";
import ProgressControl from "./ProgressControl/ProgressControl.jsx";
import StepOne from "./Steps/StepOne/StepOne.jsx";
import StepTwo from "./Steps/StepTwo/StepTwo.jsx";
import StepThree from "./Steps/StepThree/StepThree.jsx";

function Form() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleClickPrev() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  function handleClickNext() {
    if (currentStep < 3) 
      setCurrentStep(currentStep + 1)
  }

  return (
<div className="stepContainer">
  <StepProgress currentStep={currentStep} />
  <FormContextProvider>
    <div className="formContainer">
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
    </div>
    <div className="controlContainer">
      <ProgressControl
        currentStep={currentStep}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </div>
  </FormContextProvider>
</div>
  )
}

export default Form;