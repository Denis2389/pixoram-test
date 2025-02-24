import Card from "../Card/Card"
import styles from './CardList.module.scss'
import { useState } from "react"

interface Card {
    id: number,
    title: string,
    image: string,
    price: number,
    category: string,
}

interface CardsListProps {
    cards: Card[];
}

const CardList: React.FC<CardsListProps> = ({ cards }) => {

    const [value, setValue] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const filteredCards = cards.filter((card) => {
        const mathesTitle = card.title.toLowerCase().includes(value.toLowerCase());
        const mathesCategory = card.category.toLowerCase().includes(category.toLowerCase());
        return mathesTitle && mathesCategory
    })

    const categories = Array.from(new Set(cards.map((card) => card.category)));

    return (
      <section className={styles.cardList}>
        <input
          type="text"
          placeholder="Search.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select
          name="category"
          value={categories}
          onChange={(e) => setCategory(e.target.value)}
        >
            <option value="">All</option>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>

        <ul>
          {filteredCards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              category={card.category}
              price={card.price}
            />
          ))}
        </ul>
      </section>
    );
}

export default CardList