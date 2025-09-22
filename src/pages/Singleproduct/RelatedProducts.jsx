import styles from './cssfolder/relatedproducts.module.css';
import Products from '../Homepage/homepage-components/productFolder/Products'
import ShowMoreBtn from '../../components/ShowMoreBtn'

export default function RelatedProducts({ productsToShow }) {

    return (
        <div className={styles.relatedProducts}>
            <h3>Related Products</h3>
            <Products productsToShow={productsToShow} cardsToShow={4} />
            <ShowMoreBtn />
        </div>
    )
}

//192.168.0.128