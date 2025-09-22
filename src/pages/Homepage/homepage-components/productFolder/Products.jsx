import { useState } from 'react';
import { Link } from 'react-router-dom';
/* import ProductPopup from "./ProductPopup" */
//import ProductData from '../../../../dataFile/ProductData'
import Product from "./Product";
import styles from './productcssfolder/products.module.css'

export default function Products({ cardsToShow, productsToShow, addToCart }) {
   
    const visibleProducts = productsToShow.slice(0, cardsToShow);
    
    return (
        <div className={styles.products}>
            <div className={styles.productsContainer}>
                {visibleProducts.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart}/>
                ))}          
            </div>
            
            
        </div>
    )
} 

/* <div className={styles.productsContainer}>
            {ProductData.map((product) => (
                <Product key={product.id} product={product}/>
            ))}           
        </div> */