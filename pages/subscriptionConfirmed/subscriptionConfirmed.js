import styles from './subscriptionConfirmed.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SubscriptionConfirmed() {
    const router = useRouter();
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

    return (
        <div className={styles.container}>
            {message}
            <div className={styles.linkText} onClick={() => router.push('/')}>
                Back to Archive
            </div>
        </div>
    );
}

export default SubscriptionConfirmed;