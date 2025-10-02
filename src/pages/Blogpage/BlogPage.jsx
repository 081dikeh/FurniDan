import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./blogpagecss/blogpage.module.css";
import Guarantees from '../../components/Guarantees';
import SubHeroImg from '../../components/SubHeroImg';
import BlogImg1 from '../../assets/blog-page-assets/BlogImg1.png';
import BlogImg2 from '../../assets/blog-page-assets/blogImg2.png';
import BlogImg3 from '../../assets/blog-page-assets/blogImg3.png';
import BlogImg4 from '../../assets/blog-page-assets/blogImg4.png';
import BlogImg5 from '../../assets/blog-page-assets/blogImg5.png';
import BlogImg6 from '../../assets/blog-page-assets/blogImg6.png';




// Sample blog data - replace with your actual data
const blogPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: BlogImg1,
    category: "Interior Design",
    date: "14 Oct 2022",
    author: "Admin",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: BlogImg2,
    category: "Decoration",
    date: "12 Oct 2022",
    author: "Admin",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: BlogImg3,
    category: "Crafts",
    date: "10 Oct 2022",
    author: "Admin",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Modern home in Milan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: BlogImg4,
    category: "Architecture",
    date: "08 Oct 2022",
    author: "Admin",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Colorful office redesign",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: BlogImg5,
    category: "Office Design",
    date: "06 Oct 2022",
    author: "Admin",
    readTime: "5 min"
  },
  {
    id: 6,
    title: "Minimalist furniture collection",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: BlogImg6,
    category: "Furniture",
    date: "04 Oct 2022",
    author: "Admin",
    readTime: "4 min"
  }
];

const categories = [
  { name: "Interior Design", count: 15 },
  { name: "Decoration", count: 12 },
  { name: "Crafts", count: 8 },
  { name: "Architecture", count: 10 },
  { name: "Office Design", count: 6 },
  { name: "Furniture", count: 20 }
];

const recentPosts = blogPosts.slice(0, 4);

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 6;

  // Filter posts based on search
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.blogContainer}>
      {/* Hero Section */}
        <SubHeroImg pageName="Blog" />

      {/* Main Content */}
      <div className={styles.blogMainContent}>
        <div className={styles.blogWrapper}>
          {/* Blog Posts Section */}
          <div className={styles.blogPostsSection}>
            {currentPosts.map(post => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogImageContainer}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.metaItem}>
                      <i className={styles.icon}>👤</i> {post.author}
                    </span>
                    <span className={styles.metaItem}>
                      <i className={styles.icon}>📅</i> {post.date}
                    </span>
                    <span className={styles.metaItem}>
                      <i className={styles.icon}>🏷️</i> {post.category}
                    </span>
                  </div>
                  <h2 className={styles.blogTitle}>{post.title}</h2>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className={styles.readMore}>
                    Read more
                  </Link>
                </div>
              </article>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`${styles.pageButton} ${currentPage === number ? styles.active : ''}`}
                  >
                    {number}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className={styles.nextButton}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className={styles.blogSidebar}>
            {/* Search Box */}
            <div className={styles.sidebarWidget}>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>

            {/* Categories */}
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>Categories</h3>
              <ul className={styles.categoryList}>
                {categories.map((category, index) => (
                  <li key={index} className={styles.categoryItem}>
                    <span>{category.name}</span>
                    <span className={styles.categoryCount}>{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>Recent Posts</h3>
              <div className={styles.recentPosts}>
                {recentPosts.map(post => (
                  <Link to={`/blog/${post.id}`} key={post.id} className={styles.recentPostItem}>
                    <img src={post.image} alt={post.title} className={styles.recentPostImage} />
                    <div className={styles.recentPostContent}>
                      <h4>{post.title}</h4>
                      <span className={styles.recentPostDate}>{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Features Section */}
      <Guarantees />
    </div>
  );
}