import { useState } from 'react';
import styles from './checkoutpagecss/checkout.module.css';
import BillingDetails from './BillingDetails';
import PlaceOrder from './PlaceOrder';
import OrderSuccess from './OrderSuccess';
import SubHeroImg from '../../components/SubHeroImg';
import Guarantees from '../../components/Guarantees';

export default function Checkout({ cartItems, clearCart }) {
  const [ordered, setOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [billingRef, setBillingRef] = useState(null);

  const fmt = (n) => `Rp ${n.toLocaleString('id-ID')}`;
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  const handlePlaceOrder = (billing) => {
    setBillingRef(billing);
    setOrdered(true);
    clearCart();
  };

  if (ordered) return <OrderSuccess />;

  return (
    <div className={styles.checkoutPage}>
      <SubHeroImg pageName="Checkout" />
      <div className={styles.checkoutBody}>
        <BillingDetails
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          onSubmit={handlePlaceOrder}
          cartItems={cartItems}
          subtotal={subtotal}
          fmt={fmt}
        />
        <div className={styles.orderSummaryPanel}>
          <div className={styles.summaryCard}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            <div className={styles.summaryItems}>
              {cartItems.length === 0
                ? <p className={styles.emptyMsg}>Your cart is empty.</p>
                : cartItems.map(item => (
                    <div key={item.id} className={styles.summaryItem}>
                      <span className={styles.summaryItemName}>
                        {item.name} <span className={styles.summaryQty}>× {item.quantity}</span>
                      </span>
                      <span className={styles.summaryItemPrice}>{fmt(item.price * item.quantity)}</span>
                    </div>
                  ))
              }
            </div>
            <div className={styles.summaryTotals}>
              <div className={styles.totalRow}><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
              <div className={styles.totalRow}><span>Shipping</span><span className={styles.freeTag}>Free</span></div>
              <div className={`${styles.totalRow} ${styles.grandTotal}`}><span>Total</span><span>{fmt(subtotal)}</span></div>
            </div>
            <div className={styles.paymentSection}>
              <h3>Payment Method</h3>
              {[{val:'bank',label:'🏦 Direct Bank Transfer'},{val:'cash',label:'💵 Cash on Delivery'}].map(({val,label})=>(
                <label key={val} className={`${styles.paymentOption} ${paymentMethod===val?styles.paymentActive:''}`}>
                  <input type="radio" name="payment" value={val} checked={paymentMethod===val} onChange={()=>setPaymentMethod(val)} />
                  <span>{label}</span>
                </label>
              ))}
              <p className={styles.paymentNote}>
                {paymentMethod==='bank'
                  ? 'Make payment directly to our bank account. Use your Order ID as the payment reference.'
                  : 'Pay in cash upon delivery. Please have the exact amount ready.'}
              </p>
            </div>
            <PlaceOrder cartItems={cartItems} subtotal={subtotal} fmt={fmt} paymentMethod={paymentMethod} onPlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </div>
      <Guarantees />
    </div>
  );
}
