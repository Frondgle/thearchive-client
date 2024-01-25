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
    <div className="d-flex justify-content-between">
      {/* <h2>{artObj.title || 'Untitled'}</h2> */}
      <Image
        src={`${cloudinaryURL}${artObj.pic}`}
        alt={artObj.description}
        className={styles.artImage}
      />
      <div
        className={`${styles.detailsWrap}`}
        style={{ border: '1px green solid', width: '100%' }}
      >
        <h3>{artObj.title}</h3>
        <h5>{artObj.description}</h5>
        <p>{artObj.style}</p>
        <p>{artObj.location}</p>
        <p>{artObj.color ? 'Color' : 'Black & White'}</p>
        <p>{artObj.frame_type}</p>
        <p>{artObj.mods ? 'Modified' : 'Unmodified'}</p>
        <p>{new Date(artObj.date_created).toLocaleDateString()}</p>
        <p>{artObj.film_type}</p>
        <p>{artObj.malfunction ? 'Malfunction' : 'No Malfunction'}</p>
      </div>
    </div>
  );
}
