import styles from './cartpagecss/sidebarcart.module.css';
import { Link } from 'react-router-dom';

export default function SideBarCart({ isOpen, setIsOpen, cartItems, updateCartItemQuantity, removeFromCart }) {
  const fmt = (n) => `Rp ${n.toLocaleString('id-ID')}`;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`${styles.sideBar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarcartContainer}>

        {/* Header */}
        <div className={styles.sidebarHead}>
          <h2>Shopping Cart</h2>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className={styles.headDivider} />

        {/* Cart items */}
        <div className={styles.cartDisplayContainer}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <span className={styles.emptyIcon}>🛒</span>
              <p>Your cart is empty</p>
              <Link to="/shop" onClick={() => setIsOpen(false)} className={styles.shopLink}>
                Browse Products
              </Link>
            </div>
          ) : (
            <div className={styles.cartDisplay}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img
                    className={styles.sideBarcartImg}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={styles.sideBarcartDetails}>
                    <h3>{item.name}</h3>
                    <div className={styles.qtyRow}>
                      <div className={styles.qtyControls}>
                        <button
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase"
                        >
                          +
                        </button>
                      </div>
                      <p className={styles.itemTotal}>
                        {fmt(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span className={styles.totalAmt}>{fmt(total)}</span>
            </div>
            <div className={styles.footerBtns}>
              <Link
                to="/cartpage"
                className={styles.viewCartBtn}
                onClick={() => setIsOpen(false)}
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                className={styles.checkoutBtn}
                onClick={() => setIsOpen(false)}
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
