import React from 'react';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import styles from './artcard.module.css';
import Image from 'next/image';

export default function ArtCard({ artObj }) {
  const router = useRouter();
  const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

  return (
    <div className={styles.cardWrap} onClick={() => router.push(`/art/${artObj.id}`)}>
      <Image
        src={`${cloudinaryURL}${artObj.pic}`}
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