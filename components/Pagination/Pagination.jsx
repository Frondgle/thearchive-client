import React from 'react';
import styles from './pagination.module.css';
import Image from 'next/image';

const PAGINATION_BUTTONS = [
    { icon: '/images/First.png', alt: 'First', action: 0},
    { icon: '/images/Left.png', alt: 'Previous', action: 'prev'},
    { icon: '/images/Right.png', alt: 'Next', action: 'next'},
    { icon: '/images/Last.png', alt: 'Last', action: 'last'},
]

export default function Pagination({ totalPages, currentPage, onPageChange }) {
    const maxVisiblePages = 5;

    const getVisiblePages = () => {
        const start = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
        const end = Math.min(totalPages, start + maxVisiblePages);
        return Array.from({ length: end - start }, (_, i) => start + i);
    };

    const getPageForAction = (action) => {
        if (action === 'prev') return currentPage - 1;
        if (action === 'next') return currentPage + 1;
        if (action === 'last') return totalPages - 1;
        return action;
    }

    const isButtonDisabled = (action) => {
        if (action === 0 || action === 'prev') return currentPage === 0;
        if (action === 'last' || action === 'next') return currentPage === totalPages - 1;
        return false;
    }

    return (
        <div className={styles.paginationContainer}>
            {/* First and Previous buttons */}
            <div className={styles.arrowButtonsLeft}>
                {PAGINATION_BUTTONS.slice(0, 2).map(({ icon, alt, action }) => (
                    <button
                        key={alt}
                        className={styles.paginationButton}
                        onClick={() => onPageChange(getPageForAction(action))}
                        disabled={isButtonDisabled(action)}
                    >
                        <Image 
                            src={icon}
                            alt={alt}
                            className={styles.paginationIcon}
                            width={20}
                            height={20}
                        />
                    </button>
                ))}
            </div>

            {/* Page numbers */}
            <div className={styles.pageNumbers}>
                {getVisiblePages().map((page) => (
                    <div
                        key={page}
                        className={`${styles.polaroidPaginationItem} ${
                            currentPage === page ? styles.active : ''
                        }`}
                        onClick={() => onPageChange(page)}
                    >
                        <span>{page + 1}</span>
                    </div>
                ))}
            </div>

            {/* Next and Last buttons */}
            <div className={styles.arrowButtonsRight}>
                {PAGINATION_BUTTONS.slice(2).map(({ icon, alt, action }) => (
                    <button
                        key={alt}
                        className={styles.paginationButton}
                        onClick={() => onPageChange(getPageForAction(action))}
                        disabled={isButtonDisabled(action)}
                    >
                        <Image 
                            src={icon}
                            alt={alt}
                            className={styles.paginationIcon}
                            width={20}
                            height={20}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}