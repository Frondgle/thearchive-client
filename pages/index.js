import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import styles from './index.module.css';
import RandomArtCard from '@/components/RandomArtCard/RandomArtCard';
import { getArt } from '@/api/artData';

export default function Home({ randomArt }) {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const handlePhotoClick = () => {
        setCurrentPage(0);
        router.push('/photoGallery/photoGallery');
    };

    const sonatoreBlurb = `
    Hello!
    <br /><br />
    Welcome to The Sonatore Archive!
    <br /><br />
    We are excited to share with you around 150 of his Polaroid photos to launch the site with. We will expand the archive to hold all of the art we currently have of his. Which includes thousands more Polaroids, paintings, music, and more.
    <br /><br />
    If you or anyone you know have any pieces of his that you would like to add to the archive please reach out via the contact page.
    <br /><br />
    Love,
    <br /><br />
    Friends of Sonatore
  `;

    return (
        <>
            <Head>
                <title>The Sonatore Archive</title>
            </Head>
            <div className={styles.container}>
                <div
                    className={styles.sonatoreBlurb}
                    dangerouslySetInnerHTML={{ __html: sonatoreBlurb }}
                ></div>
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