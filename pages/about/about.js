import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Head>
                <title>The Sonatore Archive - About Sonatore</title>
            </Head>
            <div className={styles.container}>
                {/* <h1 className={styles.title}>Links</h1> */}
                <div className={styles.linksContainer}>
                    <Link href='https://www.instagram.com/thesonatorearchive' target='_blank' rel='noopener noreferrer'>
                        <div className={styles.iconWrapper}>
                            <Image 
                                src='/images/instagramIcon.webp'
                                alt='Instagram Icon' 
                                width={100} 
                                height={100}
                                className={styles.icon} 
                            />
                            <div className={styles.captionWrap}>
                                <div className={styles.caption}>
                                    Instagram
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href='https://www.youtube.com/@sonatore1525' target='_blank' rel='noopener noreferrer'>
                        <div className={styles.iconWrapper}>
                            <Image 
                                src='/images/youTubeIcon.webp'
                                alt='YouTube Icon' 
                                width={100} 
                                height={100}
                                className={styles.icon}
                            />
                            <div className={styles.captionWrap}>
                                <div className={styles.caption}>
                                    YouTube
                                </div>
                            </div> 
                        </div>
                    </Link>
                    <Link href='https://open.spotify.com/artist/4riQpqytzfECeWtiZ9ksYV?si=qqeh7sj-RrK9GLXHYUeUaw' target='_blank' rel='noopener noreferrer'> 
                        <div className={styles.iconWrapper}>
                            <Image 
                                src='/images/spotifyIcon2.png'
                                alt='Spotify Icon' 
                                width={100} 
                                height={100} 
                                className={styles.icon}
                            />
                            <div className={styles.captionWrap}>
                                <div className={styles.caption}>
                                    Spotify
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href='https://sonatore.bandcamp.com' target='_blank' rel='noopener noreferrer'>
                        <div className={styles.iconWrapper}>
                            <Image 
                                src='/images/bandcampIcon.png'
                                alt='Bandcamp Icon' 
                                width={100} 
                                height={100} 
                                className={styles.icon}
                            />
                            <div className={styles.captionWrap}>
                                <div className={styles.caption}>
                                    Bandcamp
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href='https://discord.com/invite/ScsaJSPTdj' target='_blank' rel='noopener noreferrer'>
                        <div className={styles.iconWrapper}>
                            <Image 
                                src='/images/discordIcon.jpg'
                                alt='Discord Icon' 
                                width={100} 
                                height={100} 
                                className={styles.icon}
                            />
                            <div className={styles.captionWrap}>
                                <div className={styles.caption}>
                                    Discord
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
