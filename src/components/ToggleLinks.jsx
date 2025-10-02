import styles from './componentcss/togglelinks.module.css'
import { Link } from 'react-router-dom'
export default function ToggleLinks({ isOpen, heartIcon, userIcon }) {
    return (

        isOpen ? <div className={styles.toggleLinkDiv}>            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><a href="#about">About</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={styles.menuBtnLinks}>
                <button><img src={heartIcon} alt="" /></button>
                <button><img src={userIcon} alt="" /></button>
            </div>
        </div> : ''
        
    )
}