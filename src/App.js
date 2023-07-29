import "./App.css";
import { useState } from "react";
import StepProgress from "./components/StepProgress/StepProgress.jsx";
import ProgressControl from "./components/ProgressControl/ProgressControl.jsx";
import StepOne from "./components/Steps/StepOne/StepOne.jsx";
import StepTwo from "./components/Steps/StepTwo/StepTwo.jsx";
import StepThree from "./components/Steps/StepThree/StepThree.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingPrice, setShippingPrice] = useState(0)

  function handleClickPrev() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  function handleClickNext() {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <main className="mainContainer">
      <div className="stepContainer">
          <StepProgress 
            currentStep={currentStep}
          />
        <div className="formContainer">
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo setShippingPrice={setShippingPrice}/>}
            {currentStep === 3 && <StepThree />}
        </div>
        <div className="controlContainer">
          <ProgressControl
            currentStep={currentStep}
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
          />
        </div>
      </div>
      <div className="cartSideContainer">
      <Cart shippingPrice={shippingPrice}/>
      </div>
    </main>
  );
}

export default App;
