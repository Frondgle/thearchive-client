import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import WhiteButton from '@/components/WhiteButton/WhiteButton';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import AboutBlurbContent from '@/content/aboutBlurbContent';
import DimensionDisplay from '@/components/DimensionDisplay/DimensionDisplay';
const SOCIAL_LINKS = [
    { href: 'https://www.instagram.com/thesonatorearchive', label: 'Instagram', icon: '/images/instagramIcon2.png' },
    { href: 'https://www.youtube.com/@sonatore1525', label: 'YouTube', icon: '/images/youTubeIcon13.png' },
    { href: 'https://open.spotify.com/artist/4riQpqytzfECeWtiZ9ksYV?si=qqeh7sj-RrK9GLXHYUeUaw', label: 'Spotify', icon: '/images/spotifyIcon9.png' },
    { href: 'https://sonatore.bandcamp.com', label: 'Bandcamp', icon: '/images/bandcampIcon7.png' },
    { href: 'https://discord.com/invite/ScsaJSPTdj', label: 'Discord', icon: '/images/discordIcon3.png' },
];

export default function About() {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const handleBackToArchive = () => {
        setCurrentPage(0);
        router.push('/photoGallery/photoGallery');
    };

    return (
        <>
            <Head>
                <title>The Sonatore Archive - About Sonatore</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.container}>
                <AboutBlurbContent />
            
                <div className={styles.centerButton}>
                    <WhiteButton onClick={handleBackToArchive}>
                        Back to Archive
                    </WhiteButton>
                </div>

                <nav className={styles.linksContainer} aria-label="Social media links">
                    {SOCIAL_LINKS.map(({ href, label, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkItem}
                            aria-label={label}
                        >
                            <div className={styles.iconWrap}>
                                <Image
                                    src={icon}
                                    alt={`${label} icon`}
                                    width={75}
                                    height={75}
                                    className={styles.icon}
                                />
                                <span className={styles.tooltip} role="tooltip">
                                    {label}
                                </span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}