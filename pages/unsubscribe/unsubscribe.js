import styles from './unsubscribe.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { unsubscribeEmail } from '../../api/unsubscribeData';

function Unsubscribe() {
    const router = useRouter();
    const { email } = router.query;
    const [status, setStatus] = useState('loading');
    const [message, setMessage] = useState('Processing your request...');

    useEffect(() => {
        if (!email) {
            setStatus('error');
            setMessage('Invalid unsubscribe link.');
            return;
        }

        unsubscribeEmail(decodeURIComponent(email))
            .then(() => {
                setStatus('success');
                setMessage(`${email} has successfully unsubscribed from The Sonatore Archive.`);
            })
            .catch((error) => {
                setStatus('error');
                setMessage(error.message || 'An error occurred. Please try again later.');
            });
    }, [email]);

    return (
        <div className={styles.container}>
            {message}
        </div>
    );
}

export default Unsubscribe;