import styles from './cssfolder/relatedproducts.module.css';
import Products from '../Homepage/homepage-components/productFolder/Products';

export default function RelatedProducts({ productsToShow, cardsToShow = 4, addToCart, toggleLike, isProductLiked }) {
  return (
    <div className={styles.relatedProducts}>
      <h3>Related Products</h3>
      <Products
        productsToShow={productsToShow}
        cardsToShow={cardsToShow}
        addToCart={addToCart}
        toggleLike={toggleLike}
        isProductLiked={isProductLiked}
        viewMode="grid"
      />
    </div>
  );
}
