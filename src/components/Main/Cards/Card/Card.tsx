import {toast, Toaster} from 'react-hot-toast';
import styles from './Card.module.scss'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from '../../../../context/CartContext';

interface CardProps {
    image: string,
    title: string,
    category: string,
    price: number,
}
const Card: React.FC<CardProps> = ({ image, title, category, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: Date.now(), title, image, price });
    toast.success('Product added to cart!')
  }

    return (
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <li className={styles.cardItem}>
          <img src={image} alt={title} />
          <h4>{category}</h4>
          <h3>{title}</h3>
          <div className={styles.cardItemBottom}>
            <p className={styles.price}>{price}$</p>
            <button onClick={handleAddToCart}>
              <MdOutlineShoppingCart color="white" size={18} />
            </button>
          </div>
        </li>
      </>
    );
}

export default Card;