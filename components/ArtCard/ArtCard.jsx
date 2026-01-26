import React from 'react';
import { useRouter } from 'next/router';
import styles from './artcard.module.css';
import Image from 'next/image';
import { getOptimizedImageUrl } from '@/utils/imageUtils';

export default function ArtCard({ artObj }) {
    const { id, pic, code, title, description } = artObj;
    const router = useRouter();
    const optimizedImageUrl = getOptimizedImageUrl(pic);

    return (
        <div className={styles.cardWrap} onClick={() => router.push(`/art/${id}`)}>
            <Image
                src={optimizedImageUrl}
                alt="art card"
                className={styles.cardImg}
                height={363}
                width={300}
            />
            <div className={styles.captionWrap}>
                <div className={styles.caption}>
                    <p>{code || ''}</p>
                    <h5>
                        <i>{title || ''}</i>
                    </h5>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    );
}