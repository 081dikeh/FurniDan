import styles from './sharesetup.module.css';

export default function ShareSetup() {
    return (
        <div className={styles.shareSetupContainer}>
            <div className={styles.shareSetupTitle}>
                <span>Share your setup with</span>
                <h1>#FuniroFurniture</h1>
            </div>
            <div className={styles.shareSetupImages}>
                <div className={`${styles.boxOne} ${styles.boxes}`}></div>
                <div className={`${styles.boxTwo} ${styles.boxes}`}></div>
                <div className={`${styles.boxThree} ${styles.boxes}`}></div>
                <div className={`${styles.boxFive} ${styles.boxes}`}></div>
                <div className={`${styles.boxSix} ${styles.boxes}`}></div>
                <div className={`${styles.boxSeven} ${styles.boxes}`}></div>
                <div className={`${styles.boxEight} ${styles.boxes}`}></div>
                <div className={`${styles.boxNine} ${styles.boxes}`}></div>
                <div className={`${styles.boxTen} ${styles.boxes}`}></div>
                <div className={`${styles.boxEleven} ${styles.boxes}`}></div>
                <div className={`${styles.boxTwelve} ${styles.boxes}`}></div>
                <div className={`${styles.boxThirteen} ${styles.boxes}`}></div>
                <div className={`${styles.boxFourteen} ${styles.boxes}`}></div>
                <div className={`${styles.boxFifteen} ${styles.boxes}`}></div>
                <div className={`${styles.boxSixteen} ${styles.boxes}`}></div>
                <div className={`${styles.boxSeventeen} ${styles.boxes}`}></div>
            </div>
        </div>
    );
}