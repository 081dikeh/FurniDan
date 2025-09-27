import styles from "./cartpagecss/sidebarcart.module.css";
import removeCartBtn from '../../assets/cartpage-assets/cancelcartbtn.png'
import AddToCartBtn from "../../components/AddToCartBtn";
import CompareBtn from "../../components/CompareBtn";
import CheckoutBtn from "../../components/CheckoutBtn";
import RemoveFromCart from "../../components/removeFromCartBtn";

export default function SideBarCart( { productIds, isTrue, setIsTrue, cartItems, updateCartItemQuantity, removeFromCart} ) {
  return ( 
    <div className={styles.sideBar}>
        <div className={styles.sidebarcartContainer}>
            <div className={styles.sidebarHead}>
                <div className={styles.title}>
                    <h2>Shopping Cart</h2>
                </div>
                <img src={removeCartBtn} 
                onClick={() => setIsTrue(!isTrue)}
                alt="" />
            </div>
            <div className={styles.cartDisplayconatainer}>
                {cartItems.length === 0 ? ' ' : (
                <div className={styles.cartDisplay}>
                  {cartItems.map((item, index) => (
                    <div key={index} className={styles.cartItem}>
                      <img className={styles.sideBarcartImg} src={item.image} alt={item.name} />
                      <div className={styles.sideBarcartdetails}>
                        <h3>{item.name}</h3>
                        <p>{item.quantity}  x $ <span>{`${item.price}`}</span></p>
                      </div>                      
                        <RemoveFromCart title={<img src={removeCartBtn} alt="" />} removeFromCart={() => removeFromCart(item.id)} />
                    </div>
                  ))}
                </div>
                )}
            </div>
            <div className={styles.lowerBtns}>
                <div className={styles.lowerBtnContainer}>
                    <AddToCartBtn title={"Cart"} productId={productIds}/>
                    <CheckoutBtn title={"Checkout"}/>
                    <CompareBtn title={"Compare"} />
                </div>
            </div>
        </div>
    </div>
)
}
