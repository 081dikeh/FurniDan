import Products from '../Homepage/homepage-components/productFolder/Products';
import styles from './shop.module.css';
import SubHeroImg from '../../components/SubHeroImg';
import Sortproducts from './Sortproducts';
import Guarantees from '../../components/Guarantees';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Chairs', 'Sofas', 'Tables', 'Lighting', 'Beds', 'Accessories'];

export default function Shop({
  productsToShow,
  cardsToShow,
  setCardsToShow,
  addToCart,
  toggleLike,
  isProductLiked,
  searchTerm,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let list = [...productsToShow];

    // Search filter
    if (searchTerm && searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          (p.category && p.category.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      list = list.filter(p => p.category === selectedCategory);
    }

    // Sort
    switch (sortOrder) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'newness':
        list = [...list.filter(p => p.new.isTrue), ...list.filter(p => !p.new.isTrue)];
        break;
      case 'sale':
        list = [...list.filter(p => p.discounted.isTrue), ...list.filter(p => !p.discounted.isTrue)];
        break;
      default:
        break;
    }

    return list;
  }, [productsToShow, searchTerm, selectedCategory, sortOrder]);

  const visibleProducts = filteredProducts.slice(0, cardsToShow);

  return (
    <div className={styles.shopContainer}>
      <SubHeroImg pageName="Shop" />

      <Sortproducts
        cardsToShow={cardsToShow}
        setCardsToShow={setCardsToShow}
        totalCount={filteredProducts.length}
        shownCount={visibleProducts.length}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        viewMode={viewMode}
        setViewMode={setViewMode}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />

      {/* Category filter panel */}
      {filterOpen && (
        <div className={styles.filterPanel}>
          <span className={styles.filterLabel}>Category:</span>
          <div className={styles.categoryPills}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`${styles.pill} ${selectedCategory === cat ? styles.pillActive : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.productContainer}>
        {visibleProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🪑</span>
            <h3>No products found</h3>
            <p>Try adjusting your filters or search term.</p>
            <button
              className={styles.clearBtn}
              onClick={() => { setSelectedCategory('All'); setSortOrder('default'); }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <Products
            cardsToShow={cardsToShow}
            productsToShow={filteredProducts}
            addToCart={addToCart}
            toggleLike={toggleLike}
            isProductLiked={isProductLiked}
            viewMode={viewMode}
          />
        )}

        {visibleProducts.length < filteredProducts.length && (
          <div className={styles.showMoreWrapper}>
            <button
              className={styles.showMoreBtn}
              onClick={() => setCardsToShow(n => n + 8)}
            >
              Show More
            </button>
          </div>
        )}
      </div>

      <Guarantees />
    </div>
  );
}
