import styles from './Header.module.scss'
import { CiShoppingBasket } from "react-icons/ci";
import { useCart } from '../../context/CartContext';

const Header = () => {

  const { isCartOpen, setIsCartOpen, cart } = useCart();

    return (
      <header className={styles.header}>
        <h1>Cards List</h1>
        <CiShoppingBasket onClick={() => setIsCartOpen(!isCartOpen)} size={28} color='white'/>
      </header>  
    )
}

export default Header