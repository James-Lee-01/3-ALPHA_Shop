import styles from "./Cart.module.css"
import { itemData } from "./itemData.js"
import { ReactComponent as PlusBtn } from "../../icons/plus.svg"
import { ReactComponent as MinusBtn } from "../../icons/minus.svg"



function Product({id, name, price, image, quantity}) {
  return (
      <div className={styles.productContainer} id={id} data-count="0" data-price={price}>
        <img className={styles.imgContainer} alt={name} src={image} />
        <div className={styles.productInfo}>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <MinusBtn className={styles.productAction } />
              <span className={styles.productCount}>{quantity}</span>
              <PlusBtn className={styles.productAction } />
            </div>
          </div>
          <div className={styles.price}>${price}</div>
        </div>
      </div>
  )
}

function CartItem() {
  return (
    <section className={styles.productList} data-total-price="0">
      {itemData.map(item => 
        <Product {...item} key={item.id} />
      )}
    </section>
  )
}

export default CartItem