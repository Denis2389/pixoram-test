import { useCart } from '../../context/CartContext';
import styles from './Cart.module.scss'
import { IoIosClose } from "react-icons/io";

const Cart = () => {
    const { cart, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

    return (
      <div className={`${styles.cartSidebar} ${isCartOpen ? styles.open : ""}`}>
        <div className={styles.cartHeader}>
          <h2>Shopping Cart</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsCartOpen(false)}
          >
            <IoIosClose size={20} />
          </button>
        </div>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.cartItemDetails}>
                  <h4>{item.title}</h4>
                  <p>{item.price}$</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    );
}

export default Cart