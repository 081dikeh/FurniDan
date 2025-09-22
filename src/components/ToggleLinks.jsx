import styles from './componentcss/togglelinks.module.css'
export default function ToggleLinks({ isOpen, heartIcon, userIcon }) {
    return (

        isOpen ? <div className={styles.toggleLinkDiv}>            
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.menuBtnLinks}>
                <button><img src={heartIcon} alt="" /></button>
                <button><img src={userIcon} alt="" /></button>
            </div>
        </div> : ''
        
    )
}