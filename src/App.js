import "./App.css";
import StepProgress from "./components/StepProgress/StepProgress.jsx";
import ProgressControl from "./components/ProgressControl/ProgressControl.jsx";
import StepOne from "./components/Steps/StepOne/StepOne.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <main className="mainContainer">
      <div className="stepContainer">
          <StepProgress />
        <div className="formContainer">
            <StepOne />
        </div>
        <div className="controlContainer">
          <ProgressControl />
        </div>
      </div>
      <div className="cartSideContainer">
      <Cart />
      </div>
    </main>
  );
}

export default App;
