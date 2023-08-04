import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import { ReactComponent as PlusBtn } from "../../icons/plus.svg";
import { ReactComponent as MinusBtn } from "../../icons/minus.svg";

function Product({item}) {
  const {handleMinus, handlePlus} = useContext(CartContext);

  return (
    <div className={styles.productContainer} key={item.id}>
      <img className={styles.imgContainer} alt={item.name} src={item.image} />
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

function CartItem() {
  const {currentProduct, allPrice, shippingPrice} = useContext(CartContext);

  return (
    <section className={styles.productList}>
      {currentProduct.map((item) => (
        <Product item={item} key={item.id} />
      ))}

      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>
          {shippingPrice === 0 ? "免費" : "$" + shippingPrice}
        </div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${allPrice}</div>
      </section>
    </section>
  );
}

export default CartItem;
