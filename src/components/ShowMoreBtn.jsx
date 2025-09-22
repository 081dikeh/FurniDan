import styles from './componentcss/showmorebtn.module.css';
import { Link } from 'react-router-dom';

export default function ShowMoreBtn() {
    return (
        <div className={styles.showMoreContainer}>
            <Link className={styles.showMoreButton} to="/shop">Show More</Link>
        </div>
    )
}