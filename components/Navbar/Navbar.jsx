import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext'; // Import the context

function NavBar() {
  const router = useRouter();
  const { setCurrentPage } = usePagination();
  const handleClick = () => {
    setCurrentPage(0); // Reset currentPage to 0
    router.push('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img 
            src="/images/hat.png" 
            alt="Golden Cowboy Hat" 
            className={styles.logo}
          />
        <div className={styles.titleText} onClick={handleClick}>
          The Sonatore Archive
        </div>
        </div>
        </div>
    </nav>
  );
}

export default NavBar;