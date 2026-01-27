import styles from './subscriptionConfirmed.module.css';
import { useRouter } from 'next/router';
import { usePagination } from '@/context/PaginationContext';
import { useEffect, useState } from 'react';
import WhiteButton from '@/components/WhiteButton/WhiteButton';

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
            <div className={styles.message}>{message}</div>
            <WhiteButton onClick={handleBackToArchive}>
                Back to Archive
            </WhiteButton>
        </div>
    );
}

export default SubscriptionConfirmed;