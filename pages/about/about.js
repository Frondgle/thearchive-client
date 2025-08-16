import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

const LINKS = [
  { href: 'https://www.instagram.com/thesonatorearchive', label: 'Instagram', src: '/images/instagramIcon2.png', alt: 'Instagram' },
  { href: 'https://www.youtube.com/@sonatore1525',        label: 'YouTube',   src: '/images/youTubeIcon13.png',   alt: 'YouTube' },
  { href: 'https://open.spotify.com/artist/4riQpqytzfECeWtiZ9ksYV?si=qqeh7sj-RrK9GLXHYUeUaw', label: 'Spotify',  src: '/images/spotifyIcon9.png', alt: 'Spotify' },
  { href: 'https://sonatore.bandcamp.com',                 label: 'Bandcamp',  src: '/images/bandcampIcon7.png',  alt: 'Bandcamp' },
  { href: 'https://discord.com/invite/ScsaJSPTdj',         label: 'Discord',   src: '/images/discordIcon3.png',   alt: 'Discord' },
];

const aboutBlurb = `
  Hiding behind a black lace veil, “<span style="color: #edef87;">call me SONATORE</span>,” says the artist, musician, Polaroid photographer, and possible self-described digital avatar. A juxtaposition in 2021 — art and music constructed on vintage aesthetics but living its life on the internet. SONATORE, or <span style="color: #edef87;">Alex Red</span>, might seem like a time traveler from a different era, but the artist himself rejects that notion. What makes Red seem unusual in modernity is his tendency to take vintage sounds and aesthetics and present them with modern sensibilities. 
  <br /><br />
  Growing up in Nashville, TN the artist found himself studying classical music and high art. Somewhere in high school and college he made the leap to indie rock, emo, and electronic music. “<span style="color: #edef87;">I grew up as a closeted gay Asian boy, and there was a lot of solace I found being able to immerse myself in art and music instead of thinking of who I am</span>,” says Red. The nostalgic and vintage aspects of his work act as a cushion to the realities of the current times, but he warns, “<span style="color: #edef87;">Remember, nostalgia is ultimately a liar</span>.” 
  <br /><br />
  At this point in the artist’s development, he has come to accept those parts of himself, and his work is a reflection of those struggles that are still encountered as a marginalized person in 2021.
  <br /><br />
  Sonatore was an American-Taiwanese singer-songwriter fusing pop, electronica, and emo to create his own unique style. Which he described as E(mo)DM and Art school pop.
  <br /><br />
  <i>- The bio above was written by SONATORE himself in 2021</i>
`;

export default function About() {
  return (
    <>
      <Head>
        <title>The Sonatore Archive - About Sonatore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <div
          className={styles.aboutBlurb}
          dangerouslySetInnerHTML={{ __html: aboutBlurb }}
        />
        <div className={styles.linksContainer}>
          {LINKS.map(({ href, label, src, alt }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
              aria-label={label}
            >
              <div className={styles.iconWrap}>
                <Image
                  src={src}
                  alt={alt}
                  width={75}
                  height={75}
                  className={styles.icon}
                />
                <span className={styles.tooltip} role="tooltip">
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}