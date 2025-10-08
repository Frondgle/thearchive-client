import styles from './contactUs.module.css';
import { useState } from 'react';
import { sendMessage } from '@/api/contactMessageData';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const data = await sendMessage(name, email, content);
            setMessage(data.message);
            
            if (data.success) {
                setName('');
                setEmail('');
                setContent('');
            }
        } catch (error) {
            setMessage(error.message || 'Message not sent. Please try again.');
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
                <h1 className={styles.titleText}>Contact The Archive</h1>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.contactBlurb}>
                Have any questions, comments, or feedback about The Sonatore Archive? Have any artwork you&apos;d like to contribute?
                <br /><br />
                Send us a message!
                <br /><br />
                We respect your privacy and will not share your information with any third parties.
            </div>
            <div className={styles.formContainer}>
                <input 
                    className={styles.inputField}
                    type="text" 
                    placeholder="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    required
                />
                <input
                    className={styles.inputField} 
                    type="email" 
                    placeholder="Email address (optional)" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                />
                <textarea
                    className={styles.inputField}
                    placeholder="Message" 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                    rows={3}
                    required
                />
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handleSubmit} className={styles.sendMessageButton}>
                    Submit
                </button>
                <button onClick={handleBackToArchive} className={`${styles.sendMessageButton} ${styles.backButton}`}>
                    Back to Archive
                </button>
            </div>
            {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    );
  }
  
  export default ContactUs;