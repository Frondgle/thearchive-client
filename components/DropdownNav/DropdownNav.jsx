import React from "react";
import { useRouter } from "next/router";
import { usePagination } from '@/context/PaginationContext';
import styles from './dropdownNav.module.css';

export default function DropdownNav() {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const handleChange = (e) => {
        let value = e.target.value;

        switch (value) {
            case "/photoGallery/photoGallery":
                router.push(value);
                break;
            case "/about/about":
                router.push(value);
                setCurrentPage(0);
                break;
            case "contact":
                router.push('/contactUs/contactUs');
                break;
            case "list":
                router.push('/mailingList/mailingList')
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