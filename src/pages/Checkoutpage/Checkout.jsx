import SubHeroImg from "../../components/SubHeroImg"
import Guarantees from "../../components/Guarantees"
import BillingDetails from "./BillingDetails"
import PlaceOrder from "./PlaceOrder"
import styles from './checkoutpagecss/checkout.module.css';


export default function Checkout({ cartItems }) {
    return (
        <div>
            <SubHeroImg pageName={"Checkout"} />
            <div className={styles.checkoutContainer}>
                <BillingDetails />
                <PlaceOrder cartItems={cartItems} />
            </div>
            <Guarantees />  
        </div>
    )
}