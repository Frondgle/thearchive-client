import { getSingleArt } from '@/api/artData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './ViewArtPage.module.css';

export default function ViewArtPage() {
  const [artObj, setArtObj] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

  useEffect(() => {
    if (id) getSingleArt(id).then(setArtObj);
  }, [id]);
  return (
    <div className="d-flex justify-content-between w-100">
      <Image
        src={`${cloudinaryURL}${artObj.pic}`}
        alt={artObj.description}
        className={styles.artImage}
      />

      <div
        className={`${styles.detailsWrap} d-flex flex-column justify-content-between`}
      >
        <h5>
          <i>{artObj.title || 'Untitled'} - </i>
          {artObj.date_created
            ? new Date(artObj.date_created).getFullYear()
            : 'Undated'}
        </h5>
        <hr />
        <p>
          {artObj.style} | {artObj.location || 'Location unknown'} |{' '}
          {artObj.color ? 'Color' : 'Black & White'}
        </p>
        <p>{artObj.frame_type} Frame</p>
        <p>{artObj.mods ? 'Modified' : 'Unmodified'}</p>
        <p>{artObj.film_type}</p>
        <p>{artObj.malfunction ? 'Malfunction' : 'No Malfunction'}</p>
        <h5>{artObj.description}</h5>
      </div>
    </div>
  );
}
