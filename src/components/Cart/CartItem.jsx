import styles from "./Cart.module.css"
import { useState } from "react"
import { itemData } from "./itemData.js"
import { ReactComponent as PlusBtn } from "../../icons/plus.svg"
import { ReactComponent as MinusBtn } from "../../icons/minus.svg"

function Product({item, handleMinus, handlePlus}) {
  return (
    <div className={styles.productContainer} key={item.id}>
      <img className={styles.imgContainer} alt={item.name} src={item.image}/>
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusBtn 
              className={styles.productAction} 
              onClick={() => handleMinus(item.id)}
            />
            <span className={styles.productCount}>{item.quantity}</span>
            <PlusBtn
              className={styles.productAction}
              onClick={() => handlePlus(item.id)}
            />
          </div>
        </div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </div>
  );
}

function CartItem({ shippingPrice }) {
  const [currentProduct, setCurrentProduct] = useState(itemData);

  function handleClickPlus(id) {
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

  function handleClickMinus(id) {
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

    if (totalPrice !== 0) {
      return totalPrice + shippingPrice;
    } else {
      return 0
    }
    
  }

  return (
    <section className={styles.productList}>
      {currentProduct.map((item) => (
        <Product
          item={item}
          key={item.id}
          handleMinus={handleClickMinus}
          handlePlus={handleClickPlus}
        />
      ))}

      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>
          {shippingPrice === 0 ? "免費" : "$"+shippingPrice}
        </div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${addTotalPrice()}</div>
      </section>
    </section>
  );
}

export default CartItem