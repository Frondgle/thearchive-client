import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref>
            <Image 
              src="/images/hat.png" 
              alt="Golden Cowboy Hat" 
              className={styles.logo}
              width={90}
              height={90} 
            />
          </Link>
          <Link href="/" className={styles.title} passHref>
            <div className={styles.skullAndText}>
              <div className={styles.skull}>
                <img src="https://cdn-icons-png.flaticon.com/512/10806/10806558.png" width={70} alt="cow skull t" />
              </div>
              <div className={styles.titleText}>
                he Sonatore Archive is DOPE!
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;