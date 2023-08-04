import "./App.css";
import { CartContextProvider } from "./context/CartContext.js";
import Form from "./components/Form/Form.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {

  return (
    <main className="mainContainer">
      <CartContextProvider>
        <Form/>
        <div className="cartSideContainer">
          <Cart/>
        </div>
      </CartContextProvider>
    </main>
  );
}

export default App;
