import likeIcon from '../../../../assets/ourProductassets/like-icon.png'
import likedicon from '../../../../assets/ourProductassets/liked-icon.png'
import compareIcon from '../../../../assets/ourProductassets/compare-icon.png'
import shareIcon from '../../../../assets/ourProductassets/share-icon.png'
import styles from './productcssfolder/productpopup.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AddToCartBtn from '../../../../components/AddToCartBtn';

export default function ProductPopup({ productId, product, addToCart, toggleLike, isProductLiked }) {
    const navigate = useNavigate();
    

    return (

        <div
            className={styles.productPopup}>
            <div className={styles.popUpBtnsContainer}>
                {/* <button 
                    onClick={() => console.log(`Product ID: ${productId} added to cart`)}
                    className={styles.addToCartButton}>Add to Cart
                </button> */}
                <AddToCartBtn title={"Add to Cart"} productId={productId} addToCart={addToCart} product={product} />
                <button
                    className={styles.detailsButton}
                    onClick={() => navigate(`/singleproduct/${productId}`)}
                >
                    View Details
                </button>
            </div>
            <div className={styles.popupLinksContainer}>
                <button>
                    <img src={shareIcon} alt="" />
                    <span>Share</span>
                </button>
                <button>
                    <img src={compareIcon} alt="" />
                    <span>Compare</span>
                </button>
                <button>
                    <img 
                        src={isProductLiked(product.id) ? likedicon : likeIcon} 
                        alt=""
                        onClick={() => toggleLike(product)}
                    />
                    <span>Like</span>
                </button>
            </div>
        </div>
    )
}