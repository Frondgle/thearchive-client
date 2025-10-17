import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import { useCallback } from 'react';
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

    const openCenteredPopup = useCallback((url, name) => {
        const w = 780;
        const h = 800;
        const dualScreenLeft = window.screenLeft ?? window.screenX ?? 0;
        const dualScreenTop = window.screenTop ?? window.screenY ?? 0;
        const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
        const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;
        const left = Math.max(0, (width - w) / 2 + dualScreenLeft);
        const top = Math.max(0, (height - h) / 2 + dualScreenTop);

        const win = window.open(
            url,
            name,
            `scrollbars=yes,resizable=yes,width=${w},height=${h},top=${top},left=${left}`
        );

        if (!win || win.closed || typeof win.closed === 'undefined') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }, []);

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
                        onClick={() => openCenteredPopup('/contactUs/contactUs', 'sonatoreContactForm')}
                    >
                        <div className={styles.linkText}>Contact Us</div>
                    </div>
                    <div
                        className={styles.link}
                        onClick={() => openCenteredPopup('/mailingList/mailingList', 'sonatoreMailingListForm')}
                    >
                        <div className={styles.linkText}>Mailing List</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;