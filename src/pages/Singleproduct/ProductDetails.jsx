import styles from './cssfolder/productdetails.module.css';
import { useState } from 'react';
import AddToCartBtn from '../../components/AddToCartBtn';
import CompareBtn from '../../components/CompareBtn';

export default function ProductDetails({ product, addToCart, quantity, setQuantity }) {

    const [cartCount, setCartCount] = useState(1);
    setQuantity(cartCount);
    return (
        <div>
            <div className={styles.singleProductDetails}>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <div className={styles.rating}>
                    <img src={product.StarRating} alt="" />
                    <span>5 Customer Reviews</span>
                </div>
                <p className={styles.reviewText}>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                <div className={styles.Productsize}>
                    <span>Size</span>
                    <div className={styles.size}>
                        <button>L</button>
                        <button>XL</button>
                        <button>XS</button>
                    </div>
                </div>

                <div className={styles.productcolor}>
                    <span>Color</span>
                    <div className={styles.color}>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>

                </div>
                <div className={styles.singleProductButtons}>
                    <div className={styles.productCounter}>
                        <button onClick={ () => setCartCount(cartCount - 1)}>-</button>
                        <span>{ cartCount }</span>
                        <button onClick={ () => setCartCount(cartCount + 1)}>+</button>
                    </div>
                    <div className={styles.addandcompare}>
                        <AddToCartBtn title="Add to Cart" addToCart={addToCart} product={product} />
                        <CompareBtn title="+ Compare" />
                    </div>
                    
                    
                </div>
                    
            </div>  

            <div className={styles.singleProductDescription}>
                <div className={styles.tags}>
                    <span>SKU : SS001</span>
                    <span>Category : Sofas</span>
                    <span>Tags : Sofa, Chair, Home, Shop</span>
                    <span>Share : </span>
                </div>
            </div>
        </div>
    )
}