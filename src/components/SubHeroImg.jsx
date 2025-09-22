import styles from './componentcss/subheroimg.module.css';

export default function SubHeroImg({ pageName }) {
    return (
        <div className={styles.shopHero}><h1>{ pageName }</h1></div>
    ) ;
}