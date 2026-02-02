import { getArtIDs, getSingleArt } from '../../api/artData';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import styles from './ViewArtPage.module.css';
import Image from 'next/image';
import Head from 'next/head';
import { usePagination } from '../../context/PaginationContext';

export default function ViewArtPage() {
    const [artObj, setArtObj] = useState({});
    const [artIDs, setArtIDs] = useState([]);
    const { currentPage, setCurrentPage, itemsPerPage } = usePagination();
    const router = useRouter();
    const { id } = router.query;
    const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
    const optimizedImageUrl = artObj.pic
        ? `${cloudinaryURL}image/upload/w_1000,h_1212,c_fill,q_auto,f_auto,fl_progressive/${artObj.pic.split('image/upload/')[1]}`
        : '';

    useEffect(() => {
        if (id) getSingleArt(id).then(setArtObj);
        getArtIDs().then(setArtIDs);
    }, [id]);

    // Pagination Logic
    const currentIndex = artIDs.indexOf(Number(id));
    const prevId = currentIndex > 0 ? artIDs[currentIndex - 1] : null;
    const nextId = currentIndex < artIDs.length - 1 ? artIDs[currentIndex + 1] : null;

    // Dynamically update the current page based on currentIndex
    useEffect(() => {
        const newPage = Math.floor(currentIndex / itemsPerPage);

        if (newPage !== currentPage && newPage >= 0) {
            setCurrentPage(newPage);
        }
    }, [currentIndex, currentPage, setCurrentPage, itemsPerPage]);

    const handlePagination = (pageId) => {
        if (pageId !== null) router.push(`/art/${pageId}`);
    };

    return (
        <>
            <Head>
                <title>{`The Sonatore Archive | ${artObj.code || 'Untitled'}`}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.artContent}>
                    <Image
                        src={optimizedImageUrl}
                        alt={artObj.description}
                        className={styles.artImage}
                        width={1000}  
                        height={1212} 
                        sizes="(max-width: 768px) 95vw, 50vw"
                        unoptimized
                    />
                    <div className={styles.detailsColumn}>
                        {/* Pagination */}
                        <div className={styles.pagination}>
                            <button
                                className={styles.paginationButton}
                                onClick={() => handlePagination(prevId)}
                                disabled={!prevId}
                            >
                                <Image 
                                    src="/images/Left.png"
                                    alt="Previous"
                                    className={styles.cardImg}
                                    width={40}
                                    height={20}
                                />
                            </button>
                            <button
                                className={styles.paginationButton}
                                onClick={() => handlePagination(nextId)}
                                disabled={!nextId}
                            >
                                <Image 
                                    src="/images/Right.png"
                                    alt="Next"
                                    className={styles.cardImg}
                                    width={40}
                                    height={20}
                                />
                            </button>
                        </div>
                        <div className={styles.detailsWrap}>
                            <div>
                                <p>{artObj.code || ''}</p>
                                <hr />
                                <p>{artObj.description}</p>
                                <hr />
                                <p className={styles.info}>
                                    {artObj.style} | {artObj.location || 'Location unknown'} | {artObj.color ? 'Color' : 'Black & White'}
                                </p>
                                <hr />
                            </div>
                            <div>
                                <p className={styles.info}>
                                    {artObj.frame_type} Frame | {artObj.film_type}
                                </p>
                                <hr />
                                <p className={styles.info}>
                                    {artObj.mods ? 'Modified' : 'Unmodified'} | {artObj.malfunction ? 'Malfunction' : 'No Malfunction'}
                                </p>
                            </div>
                        </div>
                        <div className={styles.homeButton}>
                            <button className={styles.homeButtonLink} onClick={() => router.push('/photoGallery/photoGallery')}>
                                <Image 
                                    src="/images/home-emoji.png"
                                    alt="Home"
                                    className={styles.cardImg}
                                    width={40}
                                    height={40}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}