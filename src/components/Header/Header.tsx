import styles from './Header.module.scss'
import { CiShoppingBasket } from "react-icons/ci";

const Header = () => {
    return (
      <header className={styles.header}>
        <h1>Cards List</h1>
        <CiShoppingBasket size={28} color='white'/>
      </header>  
    )
}

export default Header