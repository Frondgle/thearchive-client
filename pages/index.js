import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getArt } from '@/api/artData';
import ArtCard from '@/components/ArtCard/ArtCard';
import Pagination from '@/components/Pagination/Pagination';

export default function Home() {
  const [art, setArt] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndexStart, setCurrentIndexStart] = useState(0);

  useEffect(() => {
    getArt().then(setArt);
  }, []);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(art.length / itemsPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePagination = (pageIndex) => {
    setCurrentIndexStart(pageIndex * itemsPerPage);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
  
    // Add First and Prev buttons
    paginationItems.push(
      <Pagination.First
        key="pagination-first"
        onClick={() => handlePagination(0)}
        disabled={currentIndexStart === 0}
      />
    );
    paginationItems.push(
      <Pagination.Prev
        key="pagination-prev"
        onClick={() => handlePagination(currentIndexStart / itemsPerPage - 1)}
        disabled={currentIndexStart === 0}
      />
    );
  
    // Calculate the start and end indices of the pagination buttons
    const currentPage = currentIndexStart / itemsPerPage;
    const start = Math.max(0, currentPage - Math.floor(maxButtons / 2));
    const end = Math.min(totalPages, start + maxButtons);
  
    // Add Pagination items
    for (let i = start; i < end; i++) {
      paginationItems.push(
        <Pagination.Item
          key={`pagination-item-${i}`}
          active={i === currentPage}
          onClick={() => handlePagination(i)}
          className={styles.polaroidPaginationItem}
        >
          <span>{i + 1}</span>
        </Pagination.Item>
      );
    }
  
    // Add Next and Last buttons
    paginationItems.push(
      <Pagination.Next
        key="pagination-next"
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentIndexStart === (totalPages - 1) * itemsPerPage}
      />
    );
    paginationItems.push(
      <Pagination.Last
        key="pagination-last"
        onClick={() => handlePagination(totalPages - 1)}
        disabled={currentIndexStart === (totalPages - 1) * itemsPerPage}
      />
    );
  
    return paginationItems;
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
      
      <div className="d-flex flex-wrap justify-content-center mb-5">
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
