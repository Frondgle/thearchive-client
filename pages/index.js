import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import RandomArtCard from '@/components/RandomArtCard/RandomArtCard';
import { getArt } from '@/api/artData';

export default function Home({ randomArt }) {
  const router = useRouter();

  const sonatoreBlurb = `This is an emotional blurb about Sonatore.<br /><br />It's very dope.<br /><br />Click on the pic to view his photo gallery.`;

  return (
    <>
      <Head>
        <title>The Sonatore Archive</title>
      </Head>
      <div className={styles.container}>
        <div
          className={styles.sonatoreBlurb}
          dangerouslySetInnerHTML={{ __html: sonatoreBlurb }}
        ></div>
        <div
          className={styles.photoGalleryLink}
          onClick={() => router.push('/photoGallery/photoGallery')}
        >
          {randomArt ? (
            <RandomArtCard artObj={randomArt} />
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}

// Fetch data on the server side
export async function getServerSideProps() {
  const data = await getArt();

  // Randomly pick an art object
  let randomArt = null;
  if (data.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomArt = data[randomIndex];
  }

  return {
    props: {
      randomArt, // Pass the random art as a prop to the component
    },
  };
}