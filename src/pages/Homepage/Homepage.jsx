import styles from "./homepage.module.css";
import { useNavigate } from "react-router-dom";
import Range from "./homepage-components/Range";
import OurProduct from "./homepage-components/productFolder/OurProduct";
import ShareSetup from "./homepage-components/ShareSetup";

export default function Homepage({
  productsToShow,
  addToCart,
  toggleLike,
  isProductLiked,
}) {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop");
  };

  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.discover}>
          <span>New Arrival</span>
          <h1>Discover Our New Collection</h1>
          <p>
            Explore our premium collection of modern and elegant furniture
            pieces, crafted to transform your living spaces into your dream
            home.
          </p>
          <div className={styles.buyNowBtn}>
            <button onClick={handleShopNow}>buy now</button>
          </div>
        </div>
      </section>
      <Range />
      <OurProduct
        productsToShow={productsToShow}
        cardsToShow={8}
        addToCart={addToCart}
        toggleLike={toggleLike}
        isProductLiked={isProductLiked}
      />
      <ShareSetup />
    </div>
  );
}
