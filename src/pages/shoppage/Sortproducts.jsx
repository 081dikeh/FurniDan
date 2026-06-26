import styles from './sortproducts.module.css';
import filter from '../../assets/shop-page-assets/filter.png';
import roundGrid from '../../assets/shop-page-assets/roundgrid.png';
import viewList from '../../assets/shop-page-assets/view-list.png';

export default function Sortproducts({
  cardsToShow,
  setCardsToShow,
  totalCount,
  shownCount,
  sortOrder,
  setSortOrder,
  viewMode,
  setViewMode,
  filterOpen,
  setFilterOpen,
}) {
  return (
    <div className={styles.productSort}>
      <div className={styles.filter}>
        <button
          className={`${styles.filterBtn} ${filterOpen ? styles.filterBtnActive : ''}`}
          onClick={() => setFilterOpen(prev => !prev)}
          aria-label="Toggle filters"
        >
          <img src={filter} alt="filter" />
          Filter
        </button>

        <div className={styles.viewToggle}>
          <button
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? styles.viewActive : ''}
            aria-label="Grid view"
            title="Grid view"
          >
            <img src={roundGrid} alt="grid" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? styles.viewActive : ''}
            aria-label="List view"
            title="List view"
          >
            <img src={viewList} alt="list" />
          </button>
        </div>

        <div className={styles.divider} />

        <p className={styles.filterNum}>
          Showing <strong>{shownCount}</strong> of <strong>{totalCount}</strong> results
        </p>
      </div>

      <div className={styles.sortBy}>
        <div className={styles.sortGroup}>
          <label htmlFor="cardsToShow">Show</label>
          <select
            id="cardsToShow"
            value={cardsToShow}
            onChange={e => setCardsToShow(Number(e.target.value))}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </div>

        <div className={styles.sortGroup}>
          <label htmlFor="sortBy">Sort by</label>
          <select
            id="sortBy"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="newness">Newest First</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="sale">On Sale</option>
          </select>
        </div>
      </div>
    </div>
  );
}
