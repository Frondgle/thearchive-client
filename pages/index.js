import React from 'react';
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

    return (
        <>
            <Head>
                <title>The Sonatore Archive</title>
            </Head>
            <div className={styles.container}>
                <DimensionDisplay />
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