import SubHeroImg from "../../components/SubHeroImg";
import Guarantees from "../../components/Guarantees";
import ContactInput from './ContactInput' ;
import styles from './contact.module.css';
import addressimg from '../../assets/contact-page-assets/address.png';
import phoneimg from '../../assets/contact-page-assets/phone.png';
import timeimg from '../../assets/contact-page-assets/clock.png'


export default function Contact() {
    return (
        <div className="contactContainer">
            <SubHeroImg pageName={"Contact"} />

            <div className={styles.contactHead}>
                <h2>Get In Touch With Us</h2>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className={styles.contactInfo}>

                <div className={styles.contactTextInfo}>
                    <div className={`${styles.info} ${styles.address}`}>
                        <div className={styles.img}>
                            <img src={addressimg} alt="" />
                        </div>
                        <div className={styles.text}>
                            <h3>Address</h3>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>


                    <div className={`${styles.info} ${styles.phone}`}>
                        <div className={styles.img}>
                            <img src={phoneimg} alt="" />
                        </div>
                        <div className={styles.text}>
                            <h3>Phone</h3>
                            <p>Mobile: +(84) 546-6789 </p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>

                    </div>

                    <div className={`${styles.info} ${styles.time}`}>
                        <div className={styles.img}>
                            <img src={timeimg} alt="" />
                        </div>
                        <div className={styles.text}>
                            <h3>Working Time</h3>
                            <p>Monday-Friday: 9:00 - 22:00 </p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                <div className={styles.contactInputInfo}>
                    <ContactInput />
                </div>
            </div>
            <Guarantees />
        </div>
    )
    
}