import styles from './mailingList.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { subscribeEmail } from '@/api/subscriberData';

function MailingList() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await subscribeEmail(email);
            setMessage(data.message);

            if (data.success) {
                setEmail('');
            }
        } catch (error) {
            setMessage(error.message || 'Error subscribing. Please try again.');
        }
    };

    const handleBackToArchive = () => {
        router.push('/');
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.logoContainer}>
                    <img
                        src="/images/hat.png"
                        alt="Golden Cowboy Hat"
                        className={styles.logo}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.titleText}>Join The Mailing List</h1>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.emailBlurb}>
                    Do you want to stay updated on new art additions, events, and news about The Sonatore Archive?
                    <br /><br />
                    Join our mailing list!
                    <br /><br />
                    Please enter your email below to subscribe.
                    <br /><br />
                    We respect your privacy and will not share your information with any third parties.
                </div>
                <div className={styles.formContainer}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={handleSubmit} className={styles.subscribeButton}>
                        Subscribe
                    </button>
                    <button onClick={handleBackToArchive} className={`${styles.subscribeButton} ${styles.backButton}`}>
                        Back to Archive
                    </button>
                </div>
                {message && <p className={styles.message}>{message}</p>}
            </div>
        </div>
    );
}

export default MailingList;