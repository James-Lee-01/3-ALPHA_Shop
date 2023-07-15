import "./App.css";
import StepProgress from "./components/StepProgress/StepProgress.jsx";
import ProgressControl from "./components/ProgressControl/ProgressControl.jsx";
import StepOne from "./components/StepOne/StepOne.jsx";
import StepTwo from "./components/StepTwo/StepTwo.jsx";
import StepThree from "./components/StepThree/StepThree.jsx";

function App() {
  return (
    <main className="mainContainer">
      <div className="stepContainer">
          <StepProgress />
        <div className="formContainer">
            <StepOne />
            <StepTwo />
            <StepThree />
        </div>
        <div className="controlContainer">
          <ProgressControl />
        </div>
      </div>
    </main>
  );
}

export default App;
