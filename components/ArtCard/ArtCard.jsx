import React from 'react';
import { useRouter } from 'next/router';
import styles from './artcard.module.css';
import Image from 'next/image';

export default function ArtCard({ artObj }) {
  const router = useRouter();
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const optimizedImageUrl = `${cloudinaryURL}image/upload/w_300,h_300,q_auto:eco,f_auto,fl_progressive,fl_png8/${artObj.pic.split('image/upload/')[1]}`;
  
  return (
    <div className={styles.cardWrap} onClick={() => router.push(`/art/${artObj.id}`)}>
      <Image
        src={optimizedImageUrl}
        alt="art card"
        className={styles.cardImg}
        height={300}
        width={300}
      />
      <div className={styles.captionWrap}>
        <div className={styles.caption}>
          <p>{artObj.code || ''}</p>
          <h5>
            <i>{artObj.title || ''}</i>
          </h5>
          <p className={styles.description}>{artObj.description}</p>
        </div>
      </div>
    </div>
  );
}