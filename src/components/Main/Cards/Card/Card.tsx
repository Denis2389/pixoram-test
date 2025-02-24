import styles from './Card.module.scss'
import { MdOutlineShoppingCart } from "react-icons/md";

interface CardProps {
    image: string,
    title: string,
    category: string,
    price: number,
}
const Card: React.FC<CardProps> = ({ image, title, category, price }) => {
    return (
      <li className={styles.cardItem}>
        <img src={image} alt={title} />
        <h4>{category}</h4>
        <h3>{title}</h3>
        <div className={styles.cardItemBottom}>
        <p className={styles.price}>{price}$</p>
        <button><MdOutlineShoppingCart color='white' size={18}/></button>
        </div>
      </li>
    );
}

export default Card;