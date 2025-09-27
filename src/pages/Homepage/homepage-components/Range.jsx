import styles from './range.module.css';

import livingRoom from '../../../assets/home-page-assets/living-room.png';
import bedroom from '../../../assets/home-page-assets/bedroom.png';
import diningRoom from '../../../assets/home-page-assets/Dining.png';


export default function Range() {
    return (
        <section className={styles.range}>
            <div className={styles.rangeTextContent}>
                <h3>Browse The Range</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.rangeImages}>
                <div className={styles.rangeImage}>
                    <img src={diningRoom} alt="" />
                    <span>Dining</span>
                </div>
                <div className={styles.rangeImage}>
                    <img src={livingRoom} alt="" />
                    <span>Living</span>
                </div>
                <div className={styles.rangeImage}>
                    <img src={bedroom} alt="" />
                    <span>Bedroom</span>
                </div>
            </div>

        </section>
    );
}