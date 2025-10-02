/* import Products from "../Homepage/homepage-components/productFolder/Products";

 export default function LikedProducts({ likedProducts, toggleLike, addToCart }) {
  console.log(likedProducts);
  return (
    <div>
      <h2>Your Liked Products</h2>
      
      {likedProducts.length === 0 ? (
        <p>No liked products yet. Start adding some!</p>
      ) : (
        {likedProducts.map( pro)}
      )}
    </div>
  );
} */
import styles from "./likedproductscss/likedproducts.module.css"
import Product from "../Homepage/homepage-components/productFolder/Product";
import SubHeroImg from "../../components/SubHeroImg";


function LikedProducts({ likedProducts, toggleLike, addToCart, isProductLiked }) {
  return (
    <div>
      <SubHeroImg pageName="Your Likes" />
      <hr  className={styles.hrLiked}/>
      
      {likedProducts.length === 0 ? (
        <p className={styles.noLikedProductsText}>No liked products yet. Start adding some!</p>
      ) : (
        <div className={styles.likedproductsContainer}>
          {likedProducts.map(product => (
            <div key={product.id} className="product-card">
              <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleLike={toggleLike}
              isProductLiked={isProductLiked}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedProducts;