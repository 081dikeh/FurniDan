import SubHeroImg from "../../components/SubHeroImg";
import Guarantees from "../../components/Guarantees";
import CartItems from "./CartItems";
import styles from './cartpagecss/cartpage.module.css';

export default function CartPage({ cartItems, updateCartItemQuantity, removeFromCart }) {

  return (
    <div className={styles.cartPage}>
      <SubHeroImg pageName={"Cart"} />
      <div className="cartItems">
        
        <CartItems cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} removeFromCart={removeFromCart} />
      </div>
      <Guarantees />    
    </div>
  );
}




























/* const Cart = ({ cartItems, quantity }) => {
  console.log(cartItems)
  return (
    <div>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? 'Empty Cart' : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${`${item.price * quantity}`}</p>
              <button>Remove</button>
              <div className="quantity">
                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}

export default Cart */

{/* {cartItems.length === 0 ? 'Empty Cart' : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{`Rp ${(item.price * quantity).toLocaleString('de-DE')}`}</p>
                <button>Remove</button>
                <div className="quantity">
                  <button>-</button>
                  <span>{quantity}</span>
                  <button>+</button>
                </div>
              </div>
            ))}
          </div>
        )} */}