import styles from './componentcss/addtocartbtn.module.css';

export default function AddToCartBtn({ title, addToCart, product, quantity = 1 }) {
  const handleClick = (e) => {
    e.stopPropagation();
    addToCart(product, quantity);
  };

  return (
    <button className={styles.addToCartBtn} onClick={handleClick}>
      {title}
    </button>
  );
}
