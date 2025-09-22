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

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const productsToShow = ProductData;
  const productIds = productsToShow.map((product) => product.id);
  const [cardsToShow, setCardsToShow] = useState(8);

  //for the cartfunctionality
  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(1)
  const isadded = false
  const addToCart = (product) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.id === product.id);
      if (existingItem) {
        // Increase quantity if product already in cart
        //setQuantity(quantity + 1);
        return prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });

  };
    useEffect(() => {
      console.log("Cart Items:", cartItems);
    }, [cartItems]);

  return (
    <div className="App">
      <Nav isTrue={isTrue} setIsTrue={setIsTrue} />

      <Routes>
        <Route
          path="/"
          element={<Homepage productsToShow={productsToShow} addToCart={addToCart} />}
        />
        <Route
          path="/shop"
          element={
            <Shop
              productsToShow={productsToShow}
              cardsToShow={cardsToShow}
              setCardsToShow={setCardsToShow}
              addToCart={addToCart}
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
              setQuantity={setQuantity}
              addToCart={addToCart}
              quantity={quantity}
            />
          }
        />
        <Route path="/cartpage" element={<CartPage cartItems={cartItems} quantity={quantity} />} />
      </Routes>

      {isTrue ? (
        <SideBarCart productIds={productIds} isTrue={isTrue} setIsTrue={setIsTrue} cartItems={cartItems} quantity={quantity} />
      ) : ("")}
      <Footer />
    </div>
  );
}

export default App;
