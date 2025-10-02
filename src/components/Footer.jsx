import styles from './componentcss/footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoSection}>
          <a href="" className={styles.footerLogo}>Furnidan.</a>
          <div className={styles.footerAddress}>
            <p>400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA</p>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <ul>
            <li className={styles.linkHead}>Links</li>
            <li className={styles.links}><a href="">Home</a></li>
            <li className={styles.links}><a href="">Shop</a></li>
            <li className={styles.links}><a href="">About</a></li>
            <li className={styles.links}><Link to="/contact">Contact</Link></li>
            <li className={styles.links}><Link to="/blog">Blog</Link></li>
          </ul>

          <ul>
            <li className={styles.linkHead}>Help</li>
            <li className={styles.links}><a href="">Payment Options</a></li>
            <li className={styles.links}><a href="">Returns</a></li>
            <li className={styles.links}><a href="">Privacy Policies</a></li>
          </ul>
        </div>
        
        <div className="news-letter">
          <h4 className={styles.linkHead}>Newsletter</h4>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>2023 furnidan. All rights reverved</p>
      </div>
    </footer>
  );
}