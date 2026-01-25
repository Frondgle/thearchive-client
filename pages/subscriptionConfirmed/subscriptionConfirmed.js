import styles from './subscriptionConfirmed.module.css';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import { useEffect, useState } from 'react';

function SubscriptionConfirmed() {
    const router = useRouter();
    const { setCurrentPage } = usePagination();

    const { success, already } = router.query;
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        if (success === 'true') {
            if (already === 'true') {
                setMessage('Your subscription is already confirmed!');
            } else {
                setMessage('Thank you! Your subscription has been confirmed.');
            }
        } else if (success === 'false') {
            setMessage('Invalid or expired confirmation link.');
        }
    }, [success, already]);

    const handleBackToArchive = () => {
        setCurrentPage(0);
        router.push('/photoGallery/photoGallery');
    }

    return (
        <div className={styles.container}>
            {message}
            <button className={styles.subscribeButton} onClick={handleBackToArchive}>
                Back to Archive
            </button>
        </div>
    );
}

export default SubscriptionConfirmed;