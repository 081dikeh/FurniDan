import Products from "../Homepage/homepage-components/productFolder/Products";
import styles from './shop.module.css';
import SubHeroImg from "../../components/SubHeroImg";
import Sortproducts from "./Sortproducts";
import Guarantees from '../../components/Guarantees'
import { useState } from 'react';
import ProductData from '../.././dataFile/ProductData'

export default function Shop({ productsToShow, cardsToShow, setCardsToShow, addToCart, toggleLike, isProductLiked }) {
    //const [cardsToShow, setCardsToShow] = useState(8);
// This should log 8, 16, or 32
    const productstoShow = ProductData;

    return (

        <div className={styles.shopContainer}>
            <SubHeroImg pageName={"Shop"} />
            <Sortproducts cardsToShow={cardsToShow} setCardsToShow={setCardsToShow} ProductData={ProductData} />
            <div className={styles.productContainer}>
                <Products cardsToShow={cardsToShow} productsToShow={productsToShow} addToCart={addToCart} toggleLike={toggleLike} isProductLiked={isProductLiked} />
            </div>
            <div className="guaranteeContainer">
                <Guarantees />
            </div>


        </div>
    )
}