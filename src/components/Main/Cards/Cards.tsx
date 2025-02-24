import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../Loader/Loader'
import CardList from './CardList/CardList'

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

    if (loading) {
        return <Loader />
    }

    return (
      <CardList cards={cards} />
    );
}

export default Cards