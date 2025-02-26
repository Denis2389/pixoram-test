import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../Loader/Loader'
import CardList from './CardList/CardList'
import styles from './Cards.module.scss'
interface Card {
    id: number,
    title: string,
    image: string,
    description: string,
    price: number,
    category: string,
}
const Cards = () => {

    const [cards, setCards] = useState<Card[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 6;
    
    useEffect(() => {
        async function fetchCards() {
            try {
                setLoading(true)
                const response = await axios.get('https://fakestoreapi.com/products')
                setCards(response.data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCards()
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCards = cards.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(cards.length / itemsPerPage);

    if (loading) {
        return <Loader />
    }

    return (
      <>
        <CardList cards={currentCards} />
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </>
    );
}

export default Cards