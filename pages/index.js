import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getArt } from '@/api/artData';
import ArtCard from '@/components/ArtCard/ArtCard';
import Pagination from '@/components/Pagination/Pagination';
import styles from './index.module.css';

export default function Home() {
  const [art, setArt] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getArt().then(setArt);
  }, []);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(art.length / itemsPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const currentArt = art.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <Head>
        <title>The Sonatore Archive</title>
      </Head>
      
      <div className={styles.artContainer}>
        {currentArt.map((artObj, index) => (
          <ArtCard key={index} artObj={artObj} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}