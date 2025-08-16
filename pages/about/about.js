import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';

export default function About() {
    const aboutBlurb = ` 
        Hiding behind a black lace veil, “call me SONATORE,” says the artist, musician, Polaroid photographer, and possible self-described digital avatar. A juxtaposition in 2021 — art and music constructed on vintage aesthetics but living it’s life on the internet. SONATORE, or Alex Red, might seem like a time traveler from a different era, but the artist himself rejects that notion. What makes Red seem unusual in modernity is his tendency to take vintage sounds and aesthetics and present them with modern sensibilities. Growing up in Nashville, TN the artist found himself studying classical music and high art. Somewhere in high school and college he made the leap to indie rock, emo, and electronic music. “I grew up as a closeted gay Asian boy, and there was a lot of solace I found being able to immerse myself in art and music instead of thinking of who I am,” says Red. The nostalgic and vintage aspects of his work act as a cushion to the realities of the current times, but he warns, “Remember, nostalgia is ultimately a liar.” At this point in the artist’s development, he has come to accept those parts of himself, and his work is a reflection of those struggles that are still encountered as a marginalized person in 2021.
        <br /><br />
        Sonatore was an American-Taiwanese singer-songwriter fusing pop, electronica, and emo to create his own unique style. Which he described as E(mo)DM and Art school pop.
        <br /><br />
        The bio above was written by SONATORE himself in 2021.
    `;
    return (
        <>
            <Head>
                <title>The Sonatore Archive - About Sonatore</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.aboutBlurb} dangerouslySetInnerHTML={{ __html: aboutBlurb }}></div>
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
