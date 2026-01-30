import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import styles from './index.module.css';
import RandomArtCard from '@/components/RandomArtCard/RandomArtCard';
import { getArt } from '@/api/artData';
import WhiteButton from '@/components/WhiteButton/WhiteButton';
import IndexBlurbContent from '@/content/indexBlurbContent';

import { useState, useEffect } from 'react';

export default function Home({ randomArt }) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
    const updateDimensions = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
    }, []);

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

    return (
        <>
            <Head>
                <title>The Sonatore Archive</title>
            </Head>
            <div style={{
                position: 'fixed',
                top: 10,
                right: 10,
                background: 'black',
                color: 'white',
                padding: '10px',
                zIndex: 9999,
                fontSize: '16px'
            }}>
                {dimensions.width} × {dimensions.height}
            </div>
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

// Fetch data on the server side
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