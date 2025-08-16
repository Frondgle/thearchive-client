import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

const LINKS = [
  { href: 'https://www.instagram.com/thesonatorearchive', label: 'Instagram', src: '/images/instagramIcon.webp', alt: 'Instagram', w: 100, h: 100 },
  { href: 'https://www.youtube.com/@sonatore1525',        label: 'YouTube',   src: '/images/youTubeIcon.webp',   alt: 'YouTube',   w: 100, h: 100 },
  { href: 'https://open.spotify.com/artist/4riQpqytzfECeWtiZ9ksYV?si=qqeh7sj-RrK9GLXHYUeUaw', label: 'Spotify',  src: '/images/spotifyIcon2.png', alt: 'Spotify',  w: 100, h: 100 },
  { href: 'https://sonatore.bandcamp.com',                 label: 'Bandcamp',  src: '/images/bandcampIcon.png',  alt: 'Bandcamp',  w: 100, h: 100 },
  { href: 'https://discord.com/invite/ScsaJSPTdj',         label: 'Discord',   src: '/images/discordIcon.jpg',   alt: 'Discord',   w: 100, h: 100 },
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
          {LINKS.map(({ href, label, src, alt, w, h }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
              aria-label={label}
            >
              {/* Outer: renders the glow; not clipped */}
              <div className={styles.shadowWrap}>
                {/* Inner: rounded + clipping for img + overlay */}
                <div className={styles.clipWrap}>
                  <Image
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    className={styles.icon}
                    priority={false}
                  />
                  <div className={styles.overlay}>
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