import styles from './componentcss/nav.module.css';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ToggleLinks from './ToggleLinks';

import furnidanLogo from '../assets/nav-assets/furnidan-logo.png';
import heartIcon from '../assets/nav-assets/heart-icon.png';
import cartIcon from '../assets/nav-assets/cart-icon.png';
import userIcon from '../assets/nav-assets/account-alert-icon.png';
import searchIcon from '../assets/nav-assets/search-icon.png';
import menuBtn from '../assets/nav-assets/menuButton.png';

export default function Nav({ cartOpen, setCartOpen, cartCount, likedCount, searchTerm, setSearchTerm }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate('/shop');
      setSearchOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim()) navigate('/shop');
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchTerm('');
  };

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={furnidanLogo} alt="Furnidan logo" />
            <span>Furnidan</span>
          </Link>
        </div>

        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className={styles.navIcons}>
          <button className={styles.disNone} aria-label="Account">
            <img src={userIcon} alt="Account" />
          </button>

          <button
            aria-label="Search"
            onClick={() => setSearchOpen(prev => !prev)}
            className={searchOpen ? styles.iconActive : ''}
          >
            <img src={searchIcon} alt="Search" />
          </button>

          <button className={styles.disNone} aria-label="Wishlist">
            <Link to="/likedproducts" className={styles.iconWrapper}>
              <img src={heartIcon} alt="Wishlist" />
              {likedCount > 0 && (
                <span className={styles.badge}>{likedCount}</span>
              )}
            </Link>
          </button>

          <button
            onClick={() => setCartOpen(prev => !prev)}
            aria-label="Cart"
            className={styles.cartBtn}
          >
            <span className={styles.iconWrapper}>
              <img src={cartIcon} alt="Cart" />
              {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
              )}
            </span>
          </button>
        </div>

        <div className={styles.menuBtnContainer}>
          <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <img src={menuBtn} alt="Menu" />
          </button>
        </div>

        <ToggleLinks isOpen={isOpen} heartIcon={heartIcon} userIcon={userIcon} />
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className={styles.searchBar}>
          <div className={styles.searchInner}>
            <img src={searchIcon} alt="" className={styles.searchBarIcon} />
            <input
              ref={searchRef}
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              placeholder="Search for furniture…"
              className={styles.searchInput}
            />
            {searchTerm && (
              <button className={styles.searchClear} onClick={closeSearch}>✕</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
