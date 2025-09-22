import styles from './Homepage.module.css';
import Range from './homepage-components/Range'
import OurProduct from './homepage-components/productFolder/OurProduct';
import ShareSetup from './homepage-components/ShareSetup';

export default function Homepage({ productsToShow, addToCart }) {
    return (
        <div className={styles.homepage}>
            <section className={styles.hero}>
                <div className={styles.discover}>
                    <span>New Arrival</span>
                    <h1>Discover Our New Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <div className={styles.buyNowBtn}>
                        <button>buy now</button>
                    </div>
                </div>
            </section>
            <Range />
            <OurProduct productsToShow={productsToShow} cardsToShow={8} addToCart={addToCart} />
            <ShareSetup />
        </div>
    )
} 