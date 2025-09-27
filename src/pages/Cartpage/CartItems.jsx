import styles from './cartpagecss/cartitem.module.css'

export default function CartItems({ cartItems, updateCartItemQuantity }) {
    return ( 

        <div className={styles.cartItemContainer}>
            <div className={styles.cartArray}>
                <div className={styles.cartTitles}>
                    <div><h2>Image</h2></div>
                    <div><h2>Product</h2></div>
                    <div><h2>Price</h2></div>
                    <div><h2>Quantity</h2></div>
                    <div><h2>Subtotal</h2></div>
                    <div><h2>Delete</h2></div>
                </div>


                {cartItems.length === 0 ? 'Empty Cart' : 
                    cartItems.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <div><img src={item.image} alt="" /></div>
                            <div><p>{item.name}</p></div>
                            <div><p>Rp {item.price.toLocaleString('de-DE')}</p></div>
                            <div>
                                <div className={styles.productCounter}>
                                    <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                            <div><p>{`Rp ${(item.price * item.quantity).toLocaleString('de-DE')}`}</p></div>
                            <div><p>Delete</p></div>
                        </div>
                    ))
                }
                      
            </div>
            <div className={styles.cartCheckout}></div>
        </div>
    )

}