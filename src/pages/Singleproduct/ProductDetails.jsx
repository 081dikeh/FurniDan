import styles from './cssfolder/productdetails.module.css';
import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function ProductDetails({ product, addToCart, toggleLike, isProductLiked }) {
  const { addToast } = useToast();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'L');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#8B4513');
  const [qty, setQty] = useState(1);

  const handleQtyChange = (delta) => {
    setQty(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, qty);
    addToast(`${product.name} × ${qty} added to cart`);
  };

  const handleToggleLike = () => {
    const wasLiked = isProductLiked(product.id);
    toggleLike(product);
    addToast(
      wasLiked ? 'Removed from wishlist' : `${product.name} saved to wishlist`,
      wasLiked ? 'error' : 'success'
    );
  };

  return (
    <div>
      <div className={styles.singleProductDetails}>
        <h1>{product.name}</h1>

        <p className={styles.productPrice}>
          Rp {product.price.toLocaleString('id-ID')}
          {product.priceDiscount?.isTrue && (
            <span className={styles.originalPrice}>{product.priceDiscount.slicedPrice}</span>
          )}
        </p>

        <div className={styles.rating}>
          <img src={product.StarRating} alt="Rating" />
          <div className={styles.ratingDivider} />
          <span>5 Customer Reviews</span>
        </div>

        <p className={styles.reviewText}>
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size picker */}
        <div className={styles.Productsize}>
          <span>Size</span>
          <div className={styles.size}>
            {(product.sizes || ['L', 'XL', 'XS']).map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? styles.sizeSelected : ''}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colour picker */}
        <div className={styles.productcolor}>
          <span>Colour</span>
          <div className={styles.color}>
            {(product.colors || ['#8B4513', '#2C2C2C', '#D4B483']).map(c => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                style={{ background: c }}
                className={selectedColor === c ? styles.colorSelected : styles.colorBtn}
                aria-label={`Color ${c}`}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className={styles.singleProductButtons}>
          <div className={styles.productCounter}>
            <button onClick={() => handleQtyChange(-1)} disabled={qty <= 1} aria-label="Decrease">−</button>
            <span>{qty}</span>
            <button onClick={() => handleQtyChange(1)} aria-label="Increase">+</button>
          </div>

          <div className={styles.addandcompare}>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className={styles.wishlistBtn}
              onClick={handleToggleLike}
              aria-label="Toggle wishlist"
            >
              {isProductLiked(product.id) ? '❤️ Wishlisted' : '🤍 Wishlist'}
            </button>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className={styles.singleProductDescription}>
        <div className={styles.tags}>
          <span><strong>SKU</strong> : SS001</span>
          <span><strong>Category</strong> : {product.category || 'Sofas'}</span>
          <span><strong>Tags</strong> : {product.type}</span>
        </div>
      </div>
    </div>
  );
}
