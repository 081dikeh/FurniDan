import styles from './componentcss/guarantees.module.css'
import customerSupport from '../assets/Guarantees-assets/customer-support.png'
import freeShipping from '../assets/Guarantees-assets/shipping.png'
import Guarantee from '../assets/Guarantees-assets/guarantee.png'
import Trophy from '../assets/Guarantees-assets/trophy 1.png'




export default function Guarantees() {
    return (
        <div className={styles.guarantee}>
            <div className={styles.guaranteeContent}>
                <div className="image">
                    <img src={Trophy} alt="trophy" />
                </div>
                <div className={styles.text}>
                    <h3>High Quality</h3>
                    <span>crafted from top materials</span>
                </div>
            </div>

            <div className={styles.guaranteeContent}>
                <div className="image">
                    <img src={Guarantee} alt="guarantee" />
                </div>
                <div className={styles.text}>
                    <h3>Warranty Protection</h3>
                    <span>Over 2 years</span>
                </div>
            </div>

            <div className={styles.guaranteeContent}>
                <div className="image">
                    <img src={freeShipping} alt="freeshipping" />
                </div>
                <div className={styles.text}>
                    <h3>Free Shipping</h3>
                    <span>Order over 150 $</span>
                </div>
            </div>

            <div className={styles.guaranteeContent}>
                <div className="image">
                    <img src={customerSupport} alt="customersupport" />
                </div>
                <div className={styles.text}>
                    <h3>24 / 7 Support</h3>
                    <span>Dedicated support</span>
                </div>
            </div>
        </div>
    )

}