import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './artcard.module.css';

export default function ArtCard({ artObj }) {
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  return (
    <Image
      src={`${cloudinaryURL}${artObj.pic}`}
      width={300}
      height={300}
      className={`${styles.cardImg}`}
      alt="art card"
    />
  );
}
