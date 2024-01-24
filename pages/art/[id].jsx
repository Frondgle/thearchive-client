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
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>{artObj.title || 'Untitled'}</h2>
      <Image
        src={`${cloudinaryURL}${artObj.pic}`}
        alt={artObj.description}
        className={styles.artImage}
      />
    </div>
  );
}
