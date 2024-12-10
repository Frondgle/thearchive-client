import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Pagination } from 'react-bootstrap';
import { getArt } from '@/api/artData';
import ArtCard from '@/components/ArtCard/ArtCard';

export default function Home() {
  const [art, setArt] = useState([]);
  const [currentIndexStart, setCurrentIndexStart] = useState(0);

  useEffect(() => {
    getArt().then(setArt);
  }, []);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(art.length / itemsPerPage);
  const maxButtons = 5; // Maximum number of buttons to display

  const handlePagination = (pageIndex) => {
    setCurrentIndexStart(pageIndex * itemsPerPage);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    const currentButtonCount = Math.min(maxButtons, totalPages); // Calculate the number of buttons to display

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
    let start = Math.max(0, Math.min(currentIndexStart / itemsPerPage - 1, totalPages - currentButtonCount));
    let end = start + currentButtonCount;

    // Add Pagination items
    for (let i = start; i < end; i++) {
      if (i === start && start > 0) {
        paginationItems.push(<Pagination.Ellipsis key={`pagination-ellipsis-start`} />);
      } else if (i === end - 1 && end < totalPages) {
        paginationItems.push(<Pagination.Ellipsis key={`pagination-ellipsis-end`} />);
      } else {
        paginationItems.push(
          <Pagination.Item
            key={`pagination-item-${i}`}
            active={i === currentIndexStart / itemsPerPage}
            onClick={() => handlePagination(i)}
          >
            {i + 1}
          </Pagination.Item>
        );
      }
    }

    // Add Next and Last buttons
    paginationItems.push(
      <Pagination.Next
        key="pagination-next"
        onClick={() => handlePagination(currentIndexStart / itemsPerPage + 1)}
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

  const currentArt = art.slice(currentIndexStart, currentIndexStart + itemsPerPage);

  return (
    <>
      <Head>
        <title>The Sonatore Archive</title>
      </Head>
      
      <Pagination>{renderPaginationItems()}</Pagination>
      <div className="d-flex flex-wrap justify-content-center">
        {currentArt.map((artObj, index) => (
          <ArtCard key={index} artObj={artObj} />
        ))}
      </div>
    </>
  );
}
