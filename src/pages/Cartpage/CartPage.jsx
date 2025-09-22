import SubHeroImg from "../../components/SubHeroImg";
import Guarantees from "../../components/Guarantees";

export default function CartPage({ cartItems, quantity }) {

  return (
    <div>
      <SubHeroImg pageName={"Cart"} />
      <div className="cartItems">
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