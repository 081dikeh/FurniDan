import styles from './checkoutpagecss/placeorder.module.css';

export default function PlaceOrder({ cartItems, subtotal, fmt, paymentMethod, onPlaceOrder }) {
  const handleClick = () => {
    // Trigger the hidden billing form submit which validates then calls onSubmit → onPlaceOrder
    document.getElementById('billing-submit')?.click();
  };

  return (
    <div className={styles.placeOrderContainer}>
      <p className={styles.termsText}>
        Your personal data will be used to process your order, support your experience throughout this website,
        and for other purposes described in our{' '}
        <a href="#" className={styles.privacyLink}>privacy policy</a>.
      </p>
      <button className={styles.placeOrderBtn} onClick={handleClick} disabled={cartItems.length === 0}>
        {cartItems.length === 0 ? 'Cart is empty' : `Place Order — ${fmt(subtotal)}`}
      </button>
    </div>
  );
}
