import styles from './checkoutpagecss/ordersuccess.module.css';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className={styles.successPage}>
      <div className={styles.successCard}>
        <div className={styles.checkCircle}>✓</div>
        <h1 className={styles.title}>Order Placed!</h1>
        <p className={styles.subtitle}>
          Thank you for your purchase. We've received your order and will send a
          confirmation to your email shortly.
        </p>
        <div className={styles.orderInfo}>
          <div className={styles.infoRow}><span>Order Status</span><span className={styles.status}>Processing</span></div>
          <div className={styles.infoRow}><span>Estimated Delivery</span><span>3 – 7 business days</span></div>
          <div className={styles.infoRow}><span>Payment</span><span>Confirmed</span></div>
        </div>
        <div className={styles.actions}>
          <Link to="/" className={styles.homeBtn}>Back to Home</Link>
          <Link to="/shop" className={styles.shopBtn}>Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
