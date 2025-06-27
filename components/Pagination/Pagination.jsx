import React from 'react';
import styles from './pagination.module.css';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const maxVisiblePages = 5;

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
        onClick={() => {
          onPageChange(page); // Call onPageChange with the clicked page
        }}
      >
        <span>{page + 1}</span>
      </div>
    ));
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(0)}
        disabled={currentPage === 0}
      >
        <img src="/images/First.png" alt="First" className={styles.paginationIcon} width={40} height={20} />
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <img src="/images/Left.png" alt="Left" className={styles.paginationIcon} width={40} height={20} />
      </button>

      <div style={{ marginRight: '5px' }}></div>

      {renderPageNumbers()}

      <div style={{ marginRight: '5px' }}></div>

      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        <img src="/images/Right.png" alt="Right" className={styles.paginationIcon} width={40} height={20} />
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(totalPages - 1)}
        disabled={currentPage === totalPages - 1}
      >
        <img src="/images/Last.png" alt="Last" className={styles.paginationIcon} width={40} height={20} />
      </button>
    </div>
  );
}