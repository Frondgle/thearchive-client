import React from "react";
import { useRouter } from "next/router";
import { usePagination } from '@/context/PaginationContext';
import { useCallback } from 'react';
import styles from './DropdownNav.module.css';

export default function DropdownNav() { 
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const openCenteredPopup = useCallback((url, name) => {
        const w = 720;
        const h = 780;
        const dualScreenLeft = window.screenLeft ?? window.screenX ?? 0;
        const dualScreenTop = window.screenTop ?? window.screenY ?? 0;
        const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
        const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;
        const left = Math.max(0, (width - w) / 2 + dualScreenLeft);
        const top = Math.max(0, (height - h) / 2 + dualScreenTop);
    
        const win = window.open(
          url,
          name,
          `scrollbars=yes,resizable=yes,width=${w},height=${h},top=${top},left=${left}`
        );
    
        if (!win || win.closed || typeof win.closed === 'undefined') {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }, []);

    const handleContactUs = () => {
        openCenteredPopup('https://forms.gle/pWieuBfeXdmcmLCq8', 'sonatoreContactForm')
    };

    const handleMailingList = () => {
        openCenteredPopup('https://forms.gle/MAqLRnXxQmHvzJBF7', 'sonatoreMailingListForm')
    };

    const handleChange = (e) => {
        let value = e.target.value;
        
        switch (value) {
            case "/photoGallery/photoGallery":
                router.push(value);
            case "/about/about":
                router.push(value);
                setCurrentPage(0);
                break;
            case "contact":
                handleContactUs();
                break;
            case "list":
                handleMailingList();
                break;
            default:
                break;
        }
        e.target.value = "";
    }

    return (
        <div className={styles.dropdownWrap}>
            <select onChange={handleChange} defaultValue={""} className={styles.dropdown}>
                <option value="" disabled>Navigate to...</option>
                <option value="/photoGallery/photoGallery">Photo Gallery</option>
                <option value="/about/about">About</option>
                <option value="contact">Contact Us</option>
                <option value="list">Mailing List</option>
            </select>
        </div>
    );
}