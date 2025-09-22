import { useParams, Link } from "react-router-dom";
import ProductData from '../../dataFile/ProductData'
import styles from './singleproduct.module.css';
import ProductDetails from "./ProductDetails";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";


export default function SingleProduct({ productIds, productsToShow, setCardsToShow, cardsToShow, addToCart, quantity, setQuantity }) {
    const { productId } = useParams();

    const product = ProductData.find(
        (p) => String(p.id) === String(productId)
    );
    console.log(productIds);
    return (
        <div className={styles.singleProduct}>
            <div className={styles.routeToSingleProductContainer}>
                <Link to="/" className={styles.routeToSingleProduct}>Home</Link>
                <Link to="/shop" className={styles.routeToSingleProduct}>Shop</Link>
                <h3>{product.name}</h3>
            </div>

            <div className={styles.singleProductContainer}>
                <div className={styles.singleProductImages}>
                    <div className={styles.miniImgs}>
                        <img src={product.image} alt={product.name} />
                        <img src={product.image} alt={product.name} />
                        <img src={product.image} alt={product.name} />
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className={styles.mainProductImgContainer}>
                        <img className={styles.mainProductImg} src={product.image} alt={product.name} />
                    </div>
                </div>

                <ProductDetails product={product} addToCart={addToCart} quantity={quantity} setQuantity={setQuantity} />
            </div>   

            <ProductInfo />
            <RelatedProducts productsToShow={productsToShow} cardsToShow={cardsToShow} />
        </div>
    )
}