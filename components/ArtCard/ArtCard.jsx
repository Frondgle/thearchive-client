import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './artcard.module.css';
import { useRouter } from 'next/router';

export default function ArtCard({ artObj }) {
  const router = useRouter();
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  return (
    <div className={styles.cardWrap}>
      <Image
        src={`${cloudinaryURL}${artObj.pic}`}
        alt="art card"
        className={`${styles.cardImg}`}
        height={300}
        width={300}
        onClick={() => router.push(`/art/${artObj.id}`)}
      />
      <div className={styles.caption}>Caption of Details</div>
    </div>
  );
}
