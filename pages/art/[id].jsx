import { getSingleArt } from '../../api/artData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './ViewArtPage.module.css';

export default function ViewArtPage() {
  const [artObj, setArtObj] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const imageUrl = artObj.pic ? `${cloudinaryURL}${artObj.pic}` : '';

  useEffect(() => {
    if (id) getSingleArt(id).then(setArtObj);
  }, [id]);
  return (
    <div className="d-flex">
      <Image
        src={imageUrl}
        alt={artObj.description}
        className={styles.artImage}
      />

      <div
        className={`${styles.detailsWrap} d-flex flex-column justify-content-between`}
      >
        <div>
          <h5>
            <i>{artObj.title || 'Untitled'} - </i>
            {artObj.date_created
              ? new Date(artObj.date_created).getFullYear()
              : 'Undated'}
          </h5>
          <hr />
          <p>- {artObj.description}</p>
          <hr />
          <p className={styles.info}>
            {artObj.style} | {artObj.location || 'Location unknown'} |{' '}
            {artObj.color ? 'Color' : 'Black & White'}
          </p>
          <hr />
        </div>
        <div>
          <p className={styles.info}>
            {artObj.frame_type} Frame | {artObj.film_type}
          </p>
          <hr />
          <p className={styles.info}>
            {artObj.mods ? 'Modified' : 'Unmodified'} |{' '}
            {artObj.malfunction ? 'Malfunction' : 'No Malfunction'}
          </p>
        </div>
      </div>
    </div>
  );
}
