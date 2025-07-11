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
              width={90}
              height={90} 
              onClick={handleClick} // Reset currentPage on click
            />
          </Link>
          <Link href="/" className={styles.title} passHref>
            <div className={styles.skullAndText} onClick={handleClick}> {/* Reset currentPage on click */}
              <div className={styles.skull}>
                <img src="https://cdn-icons-png.flaticon.com/512/10806/10806558.png" width={70} alt="cow skull t" />
              </div>
              <div className={styles.titleText}>
                he Sonatore Archive
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;