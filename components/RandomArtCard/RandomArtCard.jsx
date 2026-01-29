import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './randomartcard.module.css';
import { getOptimizedImageUrl } from '@/utils/imageUtils';

export default function RandomArtCard({ artObj }) {
    const router = useRouter();
    const optimizedImageUrl = getOptimizedImageUrl(artObj.pic);

    return (
        <div 
            className={styles.cardWrap} 
            onClick={() => router.push('/photoGallery/photoGallery')}
        >
            <Image 
                src={optimizedImageUrl}
                alt="Random art from gallery"
                className={styles.cardImg}
                width={1000}
                height={1333}
                sizes="50vw"
            />

            <div className={styles.captionWrap}>
                <div className={styles.caption}>
                    <p className={styles.description}>Photo Gallery</p>
                </div>
            </div>
        </div>
    );
}