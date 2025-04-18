import React from 'react';
import styles from './pagination.module.css';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const maxVisiblePages = 5; // Maximum number of polaroids to show at a time

  const getVisiblePages = () => {
    const start = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages, start + maxVisiblePages);
    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  const renderPageNumbers = () => {
    const visiblePages = getVisiblePages();
    return visiblePages.map((page) => (
      <div
        key={page}
        className={`${styles.polaroidPaginationItem} ${
          currentPage === page ? styles.active : ''
        }`}
        onClick={() => onPageChange(page)}
      >
        <span>{page + 1}</span>
      </div>
    ));
  };

  return (
    <div className={styles.paginationContainer}>
      {/* First Page Button */}
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(0)} // Go to the first page
        disabled={currentPage === 0}
      >
        <img src="/images/First.png" alt="First" className={styles.paginationIcon} width={40} />
      </button>

      {/* Previous Page Button */}
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage - 1)} // Go back one page
        disabled={currentPage === 0}
      >
        <img src="/images/Left.png" alt="Left" className={styles.paginationIcon} width={40} />
      </button>

      <div style={{ marginRight: '5px' }}></div>

      {/* Polaroid Page Numbers */}
      {renderPageNumbers()}

      <div style={{ marginRight: '5px' }}></div>

      {/* Next Page Button */}
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage + 1)} // Go forward one page
        disabled={currentPage === totalPages - 1}
      >
        <img src="/images/Right.png" alt="Right" className={styles.paginationIcon} width={40} />
      </button>

      {/* Last Page Button */}
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(totalPages - 1)} // Go to the last page
        disabled={currentPage === totalPages - 1}
      >
        <img src="/images/Last.png" alt="Last" className={styles.paginationIcon} width={40} />
      </button>
    </div>
  );
}