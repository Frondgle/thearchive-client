import styles from '@/components/Blurb/Blurb.module.css';

export default function IndexBlurbContent() {
    return (
        <>
            <div className={styles.paragraph}>Welcome to <span className={styles.highlight}>The Sonatore Archive!</span></div>
            <div className={styles.paragraph}>We are currently in our <span className={styles.highlight}>summer update</span>!</div>
            <div className={styles.paragraph}>New photos are being added weekly to take us to our new total of <span className={styles.highlight}>over 500 photos</span> added to the archive!</div>
            <div className={styles.paragraph}><span className={styles.highlight}>STILL TO COME:</span> thousands more Polaroids, paintings, music, and more.</div>
            <div className={styles.paragraph}>If you or anyone you know have any pieces of his that you would like to add to the archive <span className={styles.highlight}>please reach out</span> via the contact page.</div>
            <div className={styles.signature}><span className={styles.heart}>&#9825;</span> Friends of Sonatore</div>
        </>
    );
}