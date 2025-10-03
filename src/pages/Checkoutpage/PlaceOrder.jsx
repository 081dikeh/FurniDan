import styles from './checkoutpagecss/placeorder.module.css';
import PlaceOrderBtn from '../../components/PlaceOrderBtn';
import { useState } from 'react';

export default function PlaceOrder({ cartItems }) {
    const [paymentMethod, setPaymentMethod] = useState('bank');
    
    const paymentTexts = {
        bank: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
        cash: 'Pay with cash upon delivery. Please have the exact amount ready. Your order will be shipped immediately and payment is collected when you receive your items.'
    };

    const paymentLabels = {
        bank: 'Bank Transfer',
        cash: 'Cash Payment'
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const total = `Rp ${calculateTotal().toLocaleString('de-DE')}`;

    return (
        <div className={styles.placeOrderMainContainer}>
            <div className={styles.placeOrdercontainer}>
                <div className={styles.saleSummary}> 
                    <h1 className={styles.saleSummaryHeading}>
                        Product<span>Subtotal</span>
                    </h1>

                    {cartItems.length === 0 ? (
                        <p>No items in cart</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <h2 key={item.id || index}>
                                {item.name} x {item.quantity} 
                                <span>{`Rp ${(item.price * item.quantity).toLocaleString('de-DE')}`}</span>
                            </h2>
                        ))
                    )}
                    <h3>Total <span>{total}</span></h3>
                </div>

                <div className={styles.paymentMethodContainer}>
                    <div className={styles.paymentMethodContainerInner}>  
                        <p className={styles.paymentMethod}>
                            <span className={styles.dot}></span> 
                            {paymentLabels[paymentMethod]}
                        </p>
                        
                        <p className={styles.paymentMethodText}>
                            {paymentTexts[paymentMethod]}
                        </p>              
                        
                        <fieldset className={styles.paymentOptions}>
                            <legend className="sr-only">Payment Method</legend>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="bank"
                                        checked={paymentMethod === 'bank'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    Bank Transfer
                                </label>
                            </div>

                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cash"
                                        checked={paymentMethod === 'cash'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    Cash Payment
                                </label>
                            </div>  
                        </fieldset>

                        <p className={styles.privacyPolicy}>
                            Your personal data will be used to support your experience throughout this website, 
                            to manage access to your account, and for other purposes described in our{' '}
                            <a href="/privacy-policy">privacy policy</a>.
                        </p>
                    </div>

                    <div className={styles.placeorderbtnContainer}>
                        <PlaceOrderBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}