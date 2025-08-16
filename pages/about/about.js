import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';

const LINKS = [
    {
      href: 'https://www.instagram.com/thesonatorearchive',
      label: 'Instagram',
      src: '/images/instagramIcon.webp',
      w: 100,
      h: 100,
      alt: 'Instagram Icon',
    },
    {
      href: 'https://www.youtube.com/@sonatore1525',
      label: 'YouTube',
      src: '/images/youTubeIcon.webp',
      w: 100,
      h: 100,
      alt: 'YouTube Icon',
    },
    {
      href: 'https://open.spotify.com/artist/4riQpqytzfECeWtiZ9ksYV?si=qqeh7sj-RrK9GLXHYUeUaw',
      label: 'Spotify',
      src: '/images/spotifyIcon2.png',
      w: 100,
      h: 100,
      alt: 'Spotify Icon',
    },
    {
      href: 'https://sonatore.bandcamp.com',
      label: 'Bandcamp',
      src: '/images/bandcampIcon.png',
      w: 100,
      h: 100,
      alt: 'Bandcamp Icon',
    },
    {
      href: 'https://discord.com/invite/ScsaJSPTdj',
      label: 'Discord',
      src: '/images/discordIcon.jpg',
      w: 100,
      h: 100,
      alt: 'Discord Icon',
    },
  ];

export default function About() {
    return (
        <>
          <Head>
            <title>The Sonatore Archive - About Sonatore</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
    
          <div className={styles.container}>
            <div className={styles.linksContainer}>
              {LINKS.map(({ href, label, src, w, h, alt }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                  aria-label={label}
                >
                  <div className={styles.shadowWrap}>
                    <div className={styles.clipWrap}>
                      <Image
                        src={src}
                        alt={alt}
                        width={w}
                        height={h}
                        className={styles.icon}
                        priority={false}
                      />
                      <div className={styles.captionWrap}>
                        <div className={styles.caption}>{label}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      );
}
