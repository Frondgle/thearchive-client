import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import DropdownNav from '../DropdownNav/DropdownNav';
import Image from 'next/image';

const NAV_LINKS = [
    { text: 'Photos', path: '/photoGallery/photoGallery', resetPage: true },
    { text: 'About', path: '/about/about' },
    { text: 'Contact Us', path: '/contactUs/contactUs'},
    { text: 'Mailing List', path: '/mailingList/mailingList'}
]

function NavBar() {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const handleNavigation = (path, resetPage = false) => {
        if (resetPage) setCurrentPage(0);
        router.push(path);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Image
                        src="/images/hat.png"
                        alt="Golden Cowboy Hat"
                        className={styles.logo}
                        width={90}
                        height={90}
                    />
                    <div className={`${styles.titleText} ${styles.titleLinkText}`} onClick={() => handleNavigation('/')}>
                        The Sonatore Archive
                    </div>
                </div>
                <div className={styles.dropdownNav}>
                    <DropdownNav />
                </div>
                <div className={styles.linksContainer}>
                    {NAV_LINKS.map((link) => (
                        <div
                            key={link.text}
                            className={styles.titleLinkText}
                            onClick={() => handleNavigation(link.path, link.resetPage)}    
                        >
                            {link.text}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;