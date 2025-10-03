import styles from './checkoutpagecss/billingdetails.module.css';

export default function BillingDetails() {
    return (
        <div className={styles.billingDetailsContainer}>
            
            <form className={styles.form}>
                <h1>Billing Details</h1>
                <div className={styles.formGroup} id={styles.nameGroup}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" />
                    </div>
                    
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" />
                    </div>                  
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="companyName">Company Name (Optional)</label>
                    <input type="text" id="companyName" name="companyName" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="streetAddress">Street Address</label>
                    <input type="text" id="streetAddress" name="streetAddress" placeholder="House number and street name" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="apartment">Apartment, suite, unit etc. (Optional)</label>
                    <input type="text" id="apartment" name="apartment" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="townCity">Town / City</label>
                    <input type="text" id="townCity" name="townCity" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="state">State / County</label>
                    <input type="text" id="state" name="state" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="zipCode">Zip / Postal Code</label>
                    <input type="text" id="zipCode" name="zipCode" />
                </div>      
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                </div>
        
            </form>  
        </div>  
    )
}