import { getArtIDs, getSingleArt } from '../../api/artData';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import styles from './ViewArtPage.module.css';
import Head from 'next/head';
import { usePagination } from '../../context/PaginationContext';

export default function ViewArtPage() {
  const [artObj, setArtObj] = useState({});
  const [artIDs, setArtIDs] = useState([]);
  const { currentPage, setCurrentPage } = usePagination();
  const router = useRouter();
  const { id } = router.query;
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const optimizedImageUrl = artObj.pic
  ? `${cloudinaryURL}image/upload/w_600,h_725,q_auto:eco,f_auto,fl_progressive,fl_png8/${artObj.pic.split('image/upload/')[1]}`
  : '';

  useEffect(() => {
    if (id) getSingleArt(id).then(setArtObj);
    getArtIDs().then(setArtIDs);
  }, [id]);

  // Pagination Logic
  const currentIndex = artIDs.indexOf(Number(id));
  const prevId = currentIndex > 0 ? artIDs[currentIndex - 1] : null;
  const nextId = currentIndex < artIDs.length - 1 ? artIDs[currentIndex + 1] : null;

  // useRef stores first pic user viewed in the gallery
  const originalIDRef = useRef(null);

  // Update the originalIDRef only once when currentIndex is first calculated
  useEffect(() => {
    if (originalIDRef.current === null && currentIndex >= 0) {
      originalIDRef.current = currentIndex + 1;
    }
  }, [currentIndex]);

  const originalID = originalIDRef.current; // first pic user viewed in the gallery
  const manageCPID = currentIndex + 1; // current pic user is viewing
  const remainder = manageCPID % 6;

  useEffect(() => {
    if (remainder === 0 && manageCPID < originalID) {
      setCurrentPage(currentPage - 1);
    }
    if (remainder === 1 && manageCPID > originalID) {
      setCurrentPage(currentPage + 1);
    }
  }, [manageCPID, remainder]);

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
          <img 
            src={optimizedImageUrl} 
            alt={artObj.description} 
            className={styles.artImage} 
            onContextMenu={(e) => e.preventDefault()} 
          />
          <div className={styles.detailsColumn}>
            {/* Pagination */}
            <div className={styles.pagination}>
              <button
                className={styles.paginationButton}
                onClick={() => handlePagination(prevId)}
                disabled={!prevId}
              >
                <img src="/images/Left.png" alt="Left" className={styles.paginationIcon} width={40} height={20} />
              </button>
              <button
                className={styles.paginationButton}
                onClick={() => handlePagination(nextId)}
                disabled={!nextId}
              >
                <img src="/images/Right.png" alt="Right" className={styles.paginationIcon} width={40} height={20} />
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
                <img src="/images/home-emoji.png" alt="Home" className={styles.homeButtonIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}