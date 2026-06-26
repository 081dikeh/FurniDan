import styles from './cartpagecss/cartitem.module.css';
import { Link } from 'react-router-dom';

export default function CartItems({ cartItems, updateCartItemQuantity, removeFromCart }) {
  const fmt = (n) => `Rp ${n.toLocaleString('id-ID')}`;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <span className={styles.emptyIcon}>🛒</span>
        <h2>Your cart is empty</h2>
        <p>Discover our beautiful collection and start adding pieces you love.</p>
        <Link to="/shop" className={styles.shopNowBtn}>Browse Collection</Link>
      </div>
    );
  }

  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.cartArray}>
        {/* Header row */}
        <div className={styles.cartTitles}>
          <div><span>Product</span></div>
          <div><span>Name</span></div>
          <div><span>Price</span></div>
          <div><span>Quantity</span></div>
          <div><span>Subtotal</span></div>
          <div><span></span></div>
        </div>

        {/* Items */}
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemImg}>
              <img src={item.image} alt={item.name} />
            </div>
            <div><p className={styles.itemName}>{item.name}</p></div>
            <div><p className={styles.itemPrice}>{fmt(item.price)}</p></div>
            <div>
              <div className={styles.productCounter}>
                <button
                  onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <p className={styles.subtotal}>{fmt(item.price * item.quantity)}</p>
            </div>
            <div>
              <button
                className={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Totals panel */}
      <div className={styles.cartCheckout}>
        <div className={styles.cartCheckoutContainer}>
          <h2>Cart Totals</h2>
          <div className={styles.totalRow}>
            <span>Subtotal</span>
            <span className={styles.subtotalAmt}>{fmt(total)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Shipping</span>
            <span className={styles.freeShipping}>Free</span>
          </div>
          <div className={`${styles.totalRow} ${styles.grandTotal}`}>
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>
          <Link to="/checkout" className={styles.checkoutBtn}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
