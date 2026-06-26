import styles from './productcssfolder/product.module.css';
import ProductPopup from './ProductPopup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({ product, addToCart, toggleLike, isProductLiked, viewMode = 'grid' }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const isList = viewMode === 'list';

  const goToProduct = () => navigate(`/singleproduct/${product.id}`);

  return (
    <div
      id={`product-${product.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={goToProduct}
      className={`${styles.productContainer} ${isList ? styles.listCard : ''}`}
    >
      {/* Image section */}
      <div className={`${styles.imgDescription} ${isList ? styles.listImg : ''}`}>
        <img src={product.image} alt={product.name} />

        {product.discounted.isTrue && (
          <div className={styles.discountTagContainer}>
            <span className={styles.discountTag}>{product.discounted.discountTag}</span>
          </div>
        )}
        {product.new.isTrue && (
          <div className={styles.newTagContainer}>
            <span className={styles.newTag}>{product.new.newTag}</span>
          </div>
        )}
      </div>

      {/* Text section */}
      <div className={`${styles.textDescription} ${isList ? styles.listText : ''}`}>
        <h2>{product.name}</h2>
        <p className={styles.productType}>{product.type}</p>
        <p className={styles.price}>
          {`Rp ${product.price.toLocaleString('id-ID')}`}
          {product.priceDiscount.isTrue && (
            <span className={styles.originalPrice}>{product.priceDiscount.slicedPrice}</span>
          )}
        </p>
        {isList && (
          <button
            className={styles.listAddBtn}
            onClick={e => { e.stopPropagation(); addToCart(product, 1); }}
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Hover popup - grid only */}
      {hovered && !isList && (
        <ProductPopup
          productId={product.id}
          product={product}
          addToCart={addToCart}
          toggleLike={toggleLike}
          isProductLiked={isProductLiked}
        />
      )}
    </div>
  );
}
