import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ProductData from './dataFile/ProductData';
import { ToastProvider } from './context/ToastContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/shoppage/Shop';
import Contact from './pages/Contactpage/Contact';
import SingleProduct from './pages/Singleproduct/SingleProduct';
import SideBarCart from './pages/Cartpage/SideBarCart';
import CartPage from './pages/Cartpage/CartPage';
import Checkout from './pages/Checkoutpage/Checkout';
import LikedProducts from './pages/Likedproductspage/LikedProducts';
import Blog from './pages/Blogpage/BlogPage';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const productsToShow = ProductData;
  const productIds = productsToShow.map((p) => p.id);
  const [cardsToShow, setCardsToShow] = useState(8);

  // Wishlist
  const [likedProducts, setLikedProducts] = useState([]);
  const toggleLike = (product) => {
    setLikedProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      return exists ? prev.filter(p => p.id !== product.id) : [...prev, product];
    });
  };
  const isProductLiked = (productId) => likedProducts.some(p => p.id === productId);

  // Cart
  const [cartItems, setCartItems] = useState([]);

  /**
   * addToCart(product, quantity)
   * quantity defaults to 1. Merges into existing item or creates new entry.
   */
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const likedCount = likedProducts.length;

  return (
    <ToastProvider>
      <div className="App">
        <Nav
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          cartCount={cartCount}
          likedCount={likedCount}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Sidebar cart overlay */}
        {cartOpen && (
          <div
            className="cartOverlay"
            onClick={() => setCartOpen(false)}
          />
        )}
        <SideBarCart
          productIds={productIds}
          isOpen={cartOpen}
          setIsOpen={setCartOpen}
          cartItems={cartItems}
          updateCartItemQuantity={updateCartItemQuantity}
          removeFromCart={removeFromCart}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                productsToShow={productsToShow}
                addToCart={addToCart}
                toggleLike={toggleLike}
                isProductLiked={isProductLiked}
              />
            }
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
                searchTerm={searchTerm}
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
                toggleLike={toggleLike}
                isProductLiked={isProductLiked}
              />
            }
          />
          <Route
            path="/cartpage"
            element={
              <CartPage
                cartItems={cartItems}
                updateCartItemQuantity={updateCartItemQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
          />
          <Route
            path="/likedproducts"
            element={
              <LikedProducts
                likedProducts={likedProducts}
                toggleLike={toggleLike}
                addToCart={addToCart}
                isProductLiked={isProductLiked}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
