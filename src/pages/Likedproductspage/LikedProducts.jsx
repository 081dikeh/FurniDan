import styles from "./likedproductscss/likedproducts.module.css"
import Product from "../Homepage/homepage-components/productFolder/Product";
import SubHeroImg from "../../components/SubHeroImg";
import Guarantees from "../../components/Guarantees";


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
      <Guarantees />
    </div>
  );
}

export default LikedProducts;