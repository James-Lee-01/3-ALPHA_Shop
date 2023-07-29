import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx"

function Cart({shippingPrice}) {
  return (
  <section className={styles.cartContainer}>
    <h3 className={styles.cartTitle}>購物籃</h3>
    <CartItem shippingPrice={shippingPrice}/>
  </section>
  )
}

export default Cart
