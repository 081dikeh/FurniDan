import likeIcon from '../../../../assets/ourProductassets/like-icon.png';
import likedicon from '../../../../assets/ourProductassets/liked-icon.png';
import compareIcon from '../../../../assets/ourProductassets/compare-icon.png';
import shareIcon from '../../../../assets/ourProductassets/share-icon.png';
import styles from './productcssfolder/productpopup.module.css';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../../context/ToastContext';

export default function ProductPopup({ productId, product, addToCart, toggleLike, isProductLiked }) {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    addToast(`${product.name} added to cart`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    const wasLiked = isProductLiked(product.id);
    toggleLike(product);
    addToast(wasLiked ? 'Removed from wishlist' : `${product.name} saved to wishlist`, wasLiked ? 'error' : 'success');
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/singleproduct/${productId}`);
  };

  return (
    <div className={styles.productPopup}>
      <div className={styles.popUpBtnsContainer}>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className={styles.detailsButton} onClick={handleViewDetails}>
          View Details
        </button>
      </div>
      <div className={styles.popupLinksContainer}>
        <button onClick={(e) => e.stopPropagation()}>
          <img src={shareIcon} alt="" />
          <span>Share</span>
        </button>
        <button onClick={(e) => e.stopPropagation()}>
          <img src={compareIcon} alt="" />
          <span>Compare</span>
        </button>
        <button onClick={handleLike}>
          <img src={isProductLiked(product.id) ? likedicon : likeIcon} alt="" />
          <span>{isProductLiked(product.id) ? 'Liked' : 'Like'}</span>
        </button>
      </div>
    </div>
  );
}
