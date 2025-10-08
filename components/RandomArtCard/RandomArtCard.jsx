import React from 'react';
import { useRouter } from 'next/router';
import styles from './randomartcard.module.css';

export default function RandomArtCard({ artObj }) {
  const router = useRouter();
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const optimizedImageUrl = `${cloudinaryURL}image/upload/w_300,h_363,q_auto:eco,f_auto,fl_progressive,fl_png8/${artObj.pic.split('image/upload/')[1]}`;
  
  return (
    <div className={styles.cardWrap} onClick={() => router.push('/photoGallery/photoGallery')}>
      <img
        src={optimizedImageUrl}
        alt="art card"
        className={styles.cardImg}
        height={363}
        width={300}
      />

      <div className={styles.captionWrap}>
        <div className={styles.caption}>
          <p className={styles.description}>Photo Gallery</p>
        </div>
      </div>
    </div>
  );
}