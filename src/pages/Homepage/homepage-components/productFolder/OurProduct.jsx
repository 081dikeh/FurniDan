import Products from "./Products";
import styles from './productcssfolder/ourproduct.module.css';
import { Link } from 'react-router-dom';
import ShowMoreBtn from "../../../../components/ShowMoreBtn";

export default function OurProduct({ productsToShow, cardsToShow, addToCart }) {

    return (
        <div>
            <section className={styles.ourProductSection}>
                <h2 className={styles.productHeader}>Our Products</h2>
                <Products  productsToShow={productsToShow} cardsToShow={cardsToShow} addToCart={addToCart} />
                {/* <div className={styles.showMoreContainer}>
                    <Link className={styles.showMoreButton} to="/shop">Show More</Link>
                </div> */}
                <ShowMoreBtn />
            </section>
        </div>
    )
} 