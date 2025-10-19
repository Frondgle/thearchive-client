import styles from './unsubscribe.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { unsubscribeToken } from '../../api/unsubscribeData';

function Unsubscribe() {
    const router = useRouter();
    const { token } = router.query;
    const [status, setStatus] = useState('loading');
    const [message, setMessage] = useState('Processing your request...');

    useEffect(() => {
        if (!token) {
            setStatus('error');
            setMessage('Invalid unsubscribe link.');
            return;
        }

        unsubscribeToken(token)
            .then(() => {
                setStatus('success');
                setMessage("You have successfully unsubscribed from The Sonatore Archive.");
            })
            .catch((error) => {
                setStatus('error');
                setMessage(error.message || 'An error occurred. Please try again later.');
            });
    }, [token]);

    return (
        <div className={styles.container}>
            {message}
        </div>
    );
}

export default Unsubscribe;