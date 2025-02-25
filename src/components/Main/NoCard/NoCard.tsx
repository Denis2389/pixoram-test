import styles from './NoCard.module.scss'

const NoCard = () => {
    return (
        <div className={styles.notFound}>
            <h2>Product not found! 😞</h2>
        </div>
    )
}

export default NoCard