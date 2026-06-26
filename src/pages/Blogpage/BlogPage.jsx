import { useState } from 'react';
import styles from './blogpagecss/blogpage.module.css';
import SubHeroImg from '../../components/SubHeroImg';
import Guarantees from '../../components/Guarantees';

const POSTS = [
  { id:1, title:'Going all-in with millennial design', excerpt:'How the millennial generation is reshaping interior design with bold colours, eclectic patterns and personalised spaces that feel deeply individual.', cat:'Interior Design', date:'14 Oct 2024', author:'Admin', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
  { id:2, title:'Exploring new ways of decorating', excerpt:'From sculptural furniture to layered textiles — creative approaches that breathe life and warmth into every corner of a room.', cat:'Decoration', date:'12 Oct 2024', author:'Admin', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { id:3, title:'Handmade pieces that took time to make', excerpt:'A closer look at artisanal craftsmanship and why slowing down the production process creates furniture that lasts a lifetime.', cat:'Crafts', date:'10 Oct 2024', author:'Admin', img:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
  { id:4, title:'Modern home in Lagos', excerpt:'How Nigerian designers are blending contemporary aesthetics with rich cultural heritage to create stunning modern interiors.', cat:'Architecture', date:'08 Oct 2024', author:'Admin', img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80' },
  { id:5, title:'Colourful office redesign', excerpt:'Why biophilic design, natural light, and vibrant colour are transforming workplaces into spaces people actually want to be in.', cat:'Office Design', date:'06 Oct 2024', author:'Admin', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { id:6, title:'Minimalist furniture collection', excerpt:'Less is more: the enduring appeal of minimalist design and how to introduce it into your home without it feeling cold or bare.', cat:'Furniture', date:'04 Oct 2024', author:'Admin', img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80' },
];
const ALL_CATS = ['All', ...new Set(POSTS.map(p => p.cat))];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');
  const [expanded, setExpanded] = useState(null);

  const filtered = POSTS.filter(p => {
    const matchCat = cat === 'All' || p.cat === cat;
    const matchSearch = !search.trim() || p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className={styles.blogPage}>
      <SubHeroImg pageName="Blog" />

      <div className={styles.blogBody}>
        {/* Posts */}
        <main className={styles.postList}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <span>📭</span>
              <p>No posts found. Try a different search or category.</p>
              <button onClick={() => { setSearch(''); setCat('All'); }} className={styles.resetBtn}>Reset Filters</button>
            </div>
          ) : (
            filtered.map(post => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImg}>
                  <img src={post.img} alt={post.title} />
                  <span className={styles.catBadge}>{post.cat}</span>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.postMeta}>
                    <span>👤 {post.author}</span>
                    <span>📅 {post.date}</span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postExcerpt}>
                    {expanded === post.id ? post.excerpt + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.' : post.excerpt}
                  </p>
                  <button
                    className={styles.readMore}
                    onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                  >
                    {expanded === post.id ? 'Show Less ↑' : 'Read More →'}
                  </button>
                </div>
              </article>
            ))
          )}
        </main>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3>Search</h3>
            <div className={styles.searchBox}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts…" className={styles.searchInput} />
            </div>
          </div>

          <div className={styles.sideCard}>
            <h3>Categories</h3>
            {ALL_CATS.map(c => (
              <button key={c} onClick={() => setCat(c)} className={`${styles.catBtn} ${cat === c ? styles.catActive : ''}`}>
                {c}
              </button>
            ))}
          </div>

          <div className={styles.sideCard}>
            <h3>Recent Posts</h3>
            {POSTS.slice(0, 4).map(p => (
              <div key={p.id} className={styles.recentPost}>
                <img src={p.img} alt={p.title} />
                <div>
                  <p>{p.title}</p>
                  <span>{p.date}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <Guarantees />
    </div>
  );
}
