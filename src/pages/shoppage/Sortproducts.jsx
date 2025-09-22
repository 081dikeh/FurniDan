
import styles from './sortproducts.module.css';
import filter from '../../assets/shop-page-assets/filter.png';
import roundGrid from '../../assets/shop-page-assets/roundgrid.png';
import viewList from '../../assets/shop-page-assets/view-list.png';



export default function Sortproducts({ cardsToShow, setCardsToShow, ProductData }) {
    

    return (
         <div className={styles.productSort}>
                <div className={styles.filter}>
                    <p className={styles.filterText}><button><img src={filter} alt="filter" /></button> Filter</p>
                    <button><img src={roundGrid} alt="roundGrid" /></button>
                    <button><img src={viewList} alt="viewList" /></button>

                    

                    <p className={styles.filterNum}>Showing 1 – {cardsToShow} of {ProductData.length} results</p>
                </div>

                <div className={styles.sortBy}>
                    <div>
                        <label htmlFor="cardsToShow" className={styles.sortBy}>Show    </label>
                        <select
                            id={styles.cardsToShow}
                            value={cardsToShow}
                            onChange={e => setCardsToShow(Number(e.target.value))}
                        >
                            <option value={8}>8</option>
                            <option value={16}>16</option>
                            <option value={32}>32</option>
                        </select>
                    </div>
                    
                    
                    <div>
                        <label htmlFor="sortBy" className={styles.sortBy}>Sort by    </label>
                        <select id={styles.sortBy}>
                            <option value="default">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="newness">Sort by newness</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select>
                    </div>
                    
                    
                </div>
            </div>
    )
}
        