import styles from './componentcss/nav.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleLinks from './ToggleLinks';

import furnidanLogo from '../assets/nav-assets/furnidan-logo.png';
import heartIcon from '../assets/nav-assets/heart-icon.png';
import cartIcon from '../assets/nav-assets/cart-icon.png';
import userIcon from '../assets/nav-assets/account-alert-icon.png';
import searchIcon from '../assets/nav-assets/search-icon.png';
import menuBtn from '../assets/nav-assets/menuButton.png';


export default function Nav({ isTrue, setIsTrue }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu(){
    setIsOpen(!isOpen);
  }


  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <a href=""><img src={furnidanLogo} alt="" /><span>Furnidan</span></a>
        </div>
        <ul className={styles.navLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className={styles.navIcons}>
            <button className={styles.disNone}><img src={userIcon} alt="" /></button>
            <button><img src={searchIcon} alt="" /></button>
            <button className={styles.disNone}><Link to="/likedproducts"><img src={heartIcon} alt="" /></Link></button>
            <button onClick={() => setIsTrue(!isTrue)}><img src={cartIcon} alt="" /></button>
        </div>
        <div className={styles.menuBtnContainer}>
          <button 
            className={styles.menuBtn}
            onClick={handleMenu}>
            <img src={menuBtn} alt="" />
          </button>
        </div>
        <ToggleLinks isOpen={isOpen} heartIcon={heartIcon} userIcon={userIcon} />
    </nav>
  );
}