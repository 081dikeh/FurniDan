import Product from './Product';
import styles from './productcssfolder/products.module.css';

export default function Products({ cardsToShow, productsToShow, addToCart, toggleLike, isProductLiked, viewMode = 'grid' }) {
  const visibleProducts = productsToShow.slice(0, cardsToShow);

  return (
    <div className={styles.products}>
      <div className={`${styles.productsContainer} ${viewMode === 'list' ? styles.listView : ''}`}>
        {visibleProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            toggleLike={toggleLike}
            isProductLiked={isProductLiked}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}
