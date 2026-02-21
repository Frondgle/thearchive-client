import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import styles from './index.module.css';
import RandomArtCard from '@/components/RandomArtCard/RandomArtCard';
import { getArt } from '@/api/artData';
import WhiteButton from '@/components/WhiteButton/WhiteButton';
import IndexBlurbContent from '@/content/indexBlurbContent';
import DimensionDisplay from '@/components/DimensionDisplay/DimensionDisplay';

export default function Home({ randomArt }) {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const handleGoToArchive = () => {
        setCurrentPage(0);
        router.push('/photoGallery/photoGallery');
    }

    const handlePhotoClick = () => {
        setCurrentPage(0);
        router.push('/photoGallery/photoGallery');
    };

    useEffect(() => {
        const adjustFontSize = () => {
            const blurb = document.querySelector(`.${styles.sonatoreBlurb}`);
            
            if (!blurb) return;  // ← Add this check
            
            let fontSize = 16;
            blurb.style.fontSize = `${fontSize}px`;
            
            while (blurb.scrollHeight > blurb.clientHeight && fontSize > 10) {
                fontSize -= 0.5;
                blurb.style.fontSize = `${fontSize}px`;
            }
        };
        
        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);
        
        return () => window.removeEventListener('resize', adjustFontSize);
    }, []);

    return (
        <>
            <Head>
                <title>The Sonatore Archive</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div className={styles.container}>
                <div className={styles.sonatoreBlurb}>
                    <IndexBlurbContent />
                    <WhiteButton onClick={handleGoToArchive}>
                        Go to Archive
                    </WhiteButton>
                </div>
                
                <div
                    className={styles.photoGalleryLink}
                    onClick={handlePhotoClick}
                >
                    {randomArt ? (
                        <RandomArtCard artObj={randomArt} />
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const data = await getArt();

    let randomArt = null;
    if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        randomArt = data[randomIndex];
    }

    return {
        props: {
            randomArt,
        },
    };
}