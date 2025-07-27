import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getSixArt } from '@/api/artData';
import ArtCard from '@/components/ArtCard/ArtCard';
import Pagination from '@/components/Pagination/Pagination';
import { usePagination } from '@/context/PaginationContext';
import styles from './photoGallery.module.css';

export default function PhotoGallery() {
  const [art, setArt] = useState([]);
  const { currentPage, setCurrentPage } = usePagination();
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      setIsLoading(true);
      const data = await getSixArt(currentPage, itemsPerPage);
      setArt(data);
      setIsLoading(false);
    };

    fetchPageData();
  }, [currentPage]);

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
        <title>The Sonatore Archive - Photo Gallery</title>
        <link rel="preload" href="/images/spaceBackground.jpg" as="image" />
      </Head>

      <Pagination
        className={styles.pagination}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
      <div className={styles.artContainer}>
        {currentArt.map((artObj, index) => (
          <ArtCard key={index} artObj={artObj} />
        ))}
      </div>
    </>
  );
}