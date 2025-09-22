import styles from './productcssfolder/product.module.css';
import ProductPopup from './ProductPopup';
import { useState } from 'react';

export default function Product({ product, addToCart }) {
    const productId = product.id; // Assuming product has an id property
    const [hovered, setHovered] = useState(false);
    const isHovered = hovered
    function popupAlert() {
        setHovered(true);
    }

    return (
        <div 
            id={product.id}
            key={product.id}
            onClick={popupAlert}
            
            onMouseLeave={() => setHovered(false)}
            className={styles.productContainer}>
            <div className={styles.imgDescription}>
                <img src={product.image} alt="" />
                
                    {product.discounted.isTrue ? 
                        <div className={styles.discountTagContainer}>
                            <span className={styles.discountTag}>{product.discounted.discountTag}</span>
                        </div> : ''}
                
                
                
                    {product.new.isTrue ? 
                        <div className={styles.newTagContainer}>
                            <span className={styles.newTag}>{product.new.newTag}</span>
                        </div> : ''}
                
            </div>
            <div className={styles.textDescription}>
                <h2>{product.name}</h2>
                <p>{product.type}</p>
                <p className={styles.price}>
                    {product.price}
                    {product.priceDiscount.isTrue ? <span>{product.priceDiscount.slicedPrice}</span> : ''}
                </p>
            </div>
            { isHovered ? <ProductPopup productId={productId} product={product} addToCart={addToCart} /> : ''}
        </div>
    )
} 



/* onMouseEnter={popupAlert} */