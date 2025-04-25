import styles from './navbar.module.css';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref>
            <img src="/images/hat.png" alt="Golden Cowboy Hat" className={styles.logo} />
          </Link>
          <Link href="/" className={styles.title} passHref>
            The Sonatore Archive
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;