import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import ProductData from "./dataFile/ProductData";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/shoppage/Shop";
import Contact from "./pages/Contactpage/Contact";
import SingleProduct from "./pages/Singleproduct/SingleProduct";
import SideBarCart from "./pages/Cartpage/SideBarCart";
import CartPage from "./pages/Cartpage/CartPage";
import Checkout from "./pages/Checkoutpage/Checkout";
import LikedProducts from "./pages/Likedproductspage/LikedProducts";

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const productsToShow = ProductData;
  const productIds = productsToShow.map((product) => product.id);
  const [cardsToShow, setCardsToShow] = useState(8);

  //for the liked products functionality
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (product) => {
    setLikedProducts(prev => {
      const isAlreadyLiked = prev.find(p => p.id === product.id);
      if (isAlreadyLiked) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };
  // Check if product is liked
  const isProductLiked = (productId) => {
    return likedProducts.some(p => p.id === productId);
  };


  //for the cartfunctionality
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(1);
  const isadded = false

  const addToCart = (product, quantity = 0) => {

  quantity = quantity + cartCount; // Use the local state for quantity 
  setCartCount(1); // Reset local state after adding to cart
  setCartItems(prevCartItems => {
    const existingItem = prevCartItems.find(item => item.id === product.id);
    if (existingItem) {
      // If already in cart, increase its quantity
      return prevCartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // If not in cart, add with specified quantity
      return [...prevCartItems, { ...product, quantity }];
    }
  });
};

const removeFromCart = (productId) => {
  setCartItems(prevCartItems =>
    prevCartItems.filter(item => item.id !== productId)
  );
};



const updateCartItemQuantity = (productId, newQuantity) => {
  setCartItems(prevCartItems =>
    prevCartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
  console.log(productId, newQuantity);
};
    


  return (
    <div className="App">
      <Nav isTrue={isTrue} setIsTrue={setIsTrue} />

      <Routes>
        <Route
          path="/"
          element={<Homepage 
                    productsToShow={productsToShow} 
                    addToCart={addToCart} 
                    toggleLike={toggleLike}
                    isProductLiked={isProductLiked}
                  />}
        />
        <Route
          path="/shop"
          element={
            <Shop
              productsToShow={productsToShow}
              cardsToShow={cardsToShow}
              setCardsToShow={setCardsToShow}
              addToCart={addToCart}
              toggleLike={toggleLike}
              isProductLiked={isProductLiked}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/singleproduct/:productId"
          element={
            <SingleProduct
              productIds={productIds}
              productsToShow={productsToShow}
              setCardsToShow={setCardsToShow}
              cardsToShow={cardsToShow}
              addToCart={addToCart}
              cartItems={cartItems}
              updateCartItemQuantity={updateCartItemQuantity}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          }
        />
        <Route path="/cartpage" element={
          <CartPage 
            cartItems={cartItems} 
            updateCartItemQuantity={updateCartItemQuantity} 
            removeFromCart={removeFromCart}
            />
          } 
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
        <Route path="/likedproducts" element={<LikedProducts likedProducts={likedProducts}
              toggleLike={toggleLike}
              addToCart={addToCart} 
              isProductLiked={isProductLiked} />}  />
      </Routes>

      {isTrue ? (
        <SideBarCart 
          productIds={productIds} 
          isTrue={isTrue} 
          setIsTrue={setIsTrue} 
          cartItems={cartItems} 
          updateCartItemQuantity={updateCartItemQuantity}
          removeFromCart={removeFromCart}
        />
      ) : ("")}

      
      <Footer />
    </div>
  );
}

export default App;



