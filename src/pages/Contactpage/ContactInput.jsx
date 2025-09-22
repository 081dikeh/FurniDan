import styles from './contactinput.module.css'
export default function ContactInput() {
    return (
        <div className={styles.contactInputInfo}>
            <form action="">
                <div className={styles.inputContainer}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name"/>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" />
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" />
                </div>
                
                <div className={styles.inputContainer}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button className={styles.contactBtn}>Submit</button>
            </form>
        </div>
    )
}