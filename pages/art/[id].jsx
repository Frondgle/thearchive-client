import { getArtIDs, getSingleArt } from '../../api/artData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Image, Pagination } from 'react-bootstrap';
import styles from './ViewArtPage.module.css';
import Head from 'next/head';

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
  // Find index of current ID in the array
  const currentIndex = artIDs.indexOf(Number(id));

  // Calculate previous and next IDs
  const prevId = currentIndex > 0 ? artIDs[currentIndex - 1] : null;
  const nextId = currentIndex < artIDs.length - 1 ? artIDs[currentIndex + 1] : null;

  // Function to handle pagination
  const handlePagination = (pageId) => {
    if (pageId !== null) router.push(`/art/${pageId}`);
  };

  return (
    <>
      <Head>
        <title>{`The Sonatore Archive | ${artObj.title || 'Untitled'}`}</title>
      </Head>
      <div className="d-flex flex-column">
        <Pagination className="d-flex justify-content-center">
          {prevId ? <Pagination.Prev onClick={() => handlePagination(prevId)} /> : <Pagination.Prev disabled />}

          {nextId ? <Pagination.Next onClick={() => handlePagination(nextId)} /> : <Pagination.Next disabled />}
        </Pagination>
        <div className="d-flex">
          <Image src={imageUrl} alt={artObj.description} className={styles.artImage} />

          <div className={`${styles.detailsWrap} d-flex flex-column justify-content-between`}>
            <div>
              <h5>
                <i>{artObj.title || 'Untitled'} - </i>
                {artObj.date_created ? new Date(artObj.date_created).getFullYear() : 'Undated'}
              </h5>
              <hr />
              <p>- {artObj.description}</p>
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
        </div>
      </div>
    </>
  );
}
