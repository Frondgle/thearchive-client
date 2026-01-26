import React from "react";
import { useRouter } from "next/router";
import { usePagination } from '@/context/PaginationContext';
import styles from './dropdownNav.module.css';

const ROUTES = {
    PHOTO_GALLERY: "/photoGallery/photoGallery",
    ABOUT: "/about/about",
    CONTACT_US: "/contactUs/contactUs",
    MAILING_LIST: "/mailingList/mailingList"
}

export default function DropdownNav() {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const handleChange = (e) => {
        const value = e.target.value;

        if (!value) return;

        if (value === ROUTES.ABOUT) setCurrentPage(0);

        router.push(value);
        e.target.value = "";
    }

    return (
        <div className={styles.dropdownWrap}>
            <select onChange={handleChange} defaultValue={""} className={styles.dropdown}>
                <option value="" disabled>Navigate to...</option>
                <option value={ROUTES.PHOTO_GALLERY}>Photo Gallery</option>
                <option value={ROUTES.ABOUT}>About</option>
                <option value={ROUTES.CONTACT_US}>Contact Us</option>
                <option value={ROUTES.MAILING_LIST}>Mailing List</option>
            </select>
        </div>
    );
}