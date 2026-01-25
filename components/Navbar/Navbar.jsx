import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import DropdownNav from '../DropdownNav/DropdownNav';

function NavBar() {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const handleHomeClick = () => {
        router.push('/');
    };

    const handlePhotoClick = () => {
        setCurrentPage(0);
        router.push('/photoGallery/photoGallery');
    };

    const handleAboutClick = () => {
        router.push('/about/about');
    };

    const handleContactUsClick = () => {
        router.push('/contactUs/contactUs');
    };

    const handleMailingListClick = () => {
        router.push('/mailingList/mailingList');
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
                    <div className={styles.titleText} onClick={handleHomeClick}>
                        The Sonatore Archive
                    </div>
                </div>
                <div className={styles.dropdownNav}>
                    <DropdownNav />
                </div>
                <div className={styles.linksContainer}>
                    <div className={styles.linkText} onClick={handlePhotoClick}>
                        Photos
                    </div>
                    <div className={styles.linkText} onClick={handleAboutClick}>
                        About
                    </div>
                    <div
                        className={styles.link}
                        onClick={handleContactUsClick}
                    >
                        <div className={styles.linkText}>Contact Us</div>
                    </div>
                    <div
                        className={styles.link}
                        onClick={handleMailingListClick}
                    >
                        <div className={styles.linkText}>Mailing List</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;