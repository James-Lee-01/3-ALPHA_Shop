import "./App.css";
import { useState } from "react";
import { FormContextProvider } from "./context/FormContext.js";
import { CartContextProvider } from "./context/CartContext.js";
import StepProgress from "./components/StepProgress/StepProgress.jsx";
import ProgressControl from "./components/ProgressControl/ProgressControl.jsx";
import StepOne from "./components/Steps/StepOne/StepOne.jsx";
import StepTwo from "./components/Steps/StepTwo/StepTwo.jsx";
import StepThree from "./components/Steps/StepThree/StepThree.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
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
    <main className="mainContainer">
      <CartContextProvider>
      <div className="stepContainer">
          <StepProgress 
            currentStep={currentStep}
          />
      <FormContextProvider>
        <div className="formContainer">
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo/>}
            {currentStep === 3 && <StepThree/>}
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
      <div className="cartSideContainer">
      <Cart/>
      </div>
      </CartContextProvider>
    </main>
  );
}

export default App;
