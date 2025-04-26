import { getArtIDs, getSingleArt } from '../../api/artData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './ViewArtPage.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function ViewArtPage() {
  const [artObj, setArtObj] = useState({});
  const [artIDs, setArtIDs] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const imageUrl = artObj.pic ? `${cloudinaryURL}${artObj.pic}` : '';

  useEffect(() => {
    if (id) getSingleArt(id).then(setArtObj);
    getArtIDs().then(setArtIDs);
  }, [id]);

  // Pagination Logic
  const currentIndex = artIDs.indexOf(Number(id));
  const prevId = currentIndex > 0 ? artIDs[currentIndex - 1] : null;
  const nextId = currentIndex < artIDs.length - 1 ? artIDs[currentIndex + 1] : null;

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
          <img src={imageUrl} alt={artObj.description} className={styles.artImage} />
          <div className={styles.detailsColumn}>
            <div className={styles.detailsWrap}>
              <div>
                <p>{artObj.code || ''}</p>
                <hr />
                <h5>
                  <i>{artObj.title || ''} </i>
                  {artObj.date_created ? ` - (${new Date(artObj.date_created).getFullYear()})` : '(Unknown Date)'}
                </h5>
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
          </div>
        </div>
      </div>
    </>
  );
}