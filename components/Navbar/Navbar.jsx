import styles from './navbar.module.css';
import Link from 'next/link';
import { usePagination } from '@/context/PaginationContext'; // Import the context

function NavBar() {
  const { setCurrentPage } = usePagination(); // Access setCurrentPage from context

  const handleClick = () => {
    setCurrentPage(0); // Reset currentPage to 0
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref>
            <img 
              src="/images/hat.png" 
              alt="Golden Cowboy Hat" 
              className={styles.logo}
              width={10}
              height={10} 
              onClick={handleClick} // Reset currentPage on click
            />
          </Link>
          <Link href="/" className={styles.title} passHref>
            <div className={styles.skullAndText} onClick={handleClick}> {/* Reset currentPage on click */}
              <div className={styles.titleText}>
                The Sonatore Archive
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;