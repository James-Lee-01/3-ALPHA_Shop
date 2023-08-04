
import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx"

function Cart() {
  return (
    
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <CartItem/>
      </section>

  );
}

export default Cart
