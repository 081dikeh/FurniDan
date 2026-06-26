import styles from './likedproductscss/likedproducts.module.css';
import SubHeroImg from '../../components/SubHeroImg';
import Products from '../Homepage/homepage-components/productFolder/Products';
import Guarantees from '../../components/Guarantees';
import { Link } from 'react-router-dom';

export default function LikedProducts({ likedProducts, toggleLike, addToCart, isProductLiked }) {
  return (
    <div className={styles.likedPage}>
      <SubHeroImg pageName="Wishlist" />

      <div className={styles.likedContent}>
        {likedProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🤍</span>
            <h2>Your wishlist is empty</h2>
            <p>Browse our collection and save the pieces you love by clicking the heart icon on any product.</p>
            <Link to="/shop" className={styles.shopBtn}>Browse Collection</Link>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2>Your Wishlist</h2>
              <p>{likedProducts.length} saved {likedProducts.length === 1 ? 'item' : 'items'}</p>
            </div>
            <Products
              productsToShow={likedProducts}
              cardsToShow={likedProducts.length}
              addToCart={addToCart}
              toggleLike={toggleLike}
              isProductLiked={isProductLiked}
              viewMode="grid"
            />
          </>
        )}
      </div>

      <Guarantees />
    </div>
  );
}
