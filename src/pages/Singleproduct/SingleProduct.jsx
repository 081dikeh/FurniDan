import { useParams, Link } from 'react-router-dom';
import ProductData from '../../dataFile/ProductData';
import styles from './singleproduct.module.css';
import ProductDetails from './ProductDetails';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';

export default function SingleProduct({
  productIds,
  productsToShow,
  setCardsToShow,
  cardsToShow,
  addToCart,
  updateCartItemQuantity,
  cartItems,
  toggleLike,
  isProductLiked,
}) {
  const { productId } = useParams();
  const product = ProductData.find(p => String(p.id) === String(productId));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product not found</h2>
        <Link to="/shop">← Back to Shop</Link>
      </div>
    );
  }

  // Related: same category, exclude this product
  const related = productsToShow.filter(
    p => p.category === product.category && p.id !== product.id
  );

  return (
    <div className={styles.singleProduct}>
      {/* Breadcrumb */}
      <div className={styles.routeToSingleProductContainer}>
        <Link to="/" className={styles.routeToSingleProduct}>Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link to="/shop" className={styles.routeToSingleProduct}>Shop</Link>
        <span className={styles.breadSep}>›</span>
        <div className={styles.breadDiv} />
        <h3>{product.name}</h3>
      </div>

      {/* Main content */}
      <div className={styles.singleProductContainer}>
        <div className={styles.singleProductImages}>
          <div className={styles.miniImgs}>
            {[0, 1, 2, 3].map(i => (
              <img key={i} src={product.image} alt={product.name} />
            ))}
          </div>
          <div className={styles.mainProductImgContainer}>
            <img className={styles.mainProductImg} src={product.image} alt={product.name} />
          </div>
        </div>

        <ProductDetails
          product={product}
          addToCart={addToCart}
          toggleLike={toggleLike}
          isProductLiked={isProductLiked}
        />
      </div>

      <ProductInfo />

      <RelatedProducts
        productsToShow={related.length > 0 ? related : productsToShow}
        cardsToShow={4}
        addToCart={addToCart}
        toggleLike={toggleLike}
        isProductLiked={isProductLiked}
      />
    </div>
  );
}
