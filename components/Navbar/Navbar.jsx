import { Image } from 'react-bootstrap';
import styles from './navbar.module.css';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg mb-3 ${styles.navbar}`}>
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${styles.navbarBrand}`}
          passHref
          href="/"
        >
          <Image
            src="/images/hat.png"
            alt="Golden Cowboy Hat"
            className={styles.logo}
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* {TODO: Design Navbar Component} */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link passHref href="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
