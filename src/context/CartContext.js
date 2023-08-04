import { createContext, useState } from "react"
import itemData from "../components/Cart/itemData.js"

const CartContext = createContext()

function CartContextProvider({children}) {
  const [currentProduct, setCurrentProduct] = useState(itemData)
  const [shippingPrice, setShippingPrice] = useState(0)
  const [lastSelectedShipping, setLastSelectedShipping] = useState("standard")
  const allPrice = addTotalPrice()

    function handlePlus(id) {
    const newCurrentProduct = currentProduct.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    setCurrentProduct(newCurrentProduct)
  }

  function handleMinus(id) {
    const newCurrentProduct = currentProduct.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      } else {
        return product
      }
    })
    setCurrentProduct(newCurrentProduct.filter(product => product.quantity !== 0))
  }

  function addTotalPrice() {
    const totalPrice = currentProduct.reduce((total, product) => {
      return total + (product.quantity * product.price)
    }, 0)

  return totalPrice + shippingPrice;

  }

  function addShippingPrice(price) {
    setShippingPrice(price)
  }

  function updateShippingPrice(selectedShipping) {
    setLastSelectedShipping(selectedShipping)
  }


  return (
    <CartContext.Provider value={{currentProduct, handlePlus, handleMinus, addShippingPrice, allPrice, shippingPrice, lastSelectedShipping, updateShippingPrice}}>
      {children}
    </CartContext.Provider>
  )

}

export {CartContext, CartContextProvider}