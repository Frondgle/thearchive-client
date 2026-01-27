import styles from '@/components/Blurb/Blurb.module.css';

export default function IndexBlurbContent() {
    return (
        <div>
            <div className={styles.paragraph}>Hello!</div>
            <div className={styles.paragraph}>Welcome to <span className={styles.highlight}>The Sonatore Archive!</span></div>
            <div className={styles.paragraph}>We are excited to share with you around <span className={styles.highlight}>150 of his Polaroid photos</span> to launch the site with.</div>
            <div className={styles.paragraph}>We will expand the archive to hold <span className={styles.highlight}>all of the art</span> we currently have of his.</div>
            <div className={styles.paragraph}><span className={styles.highlight}>SOON TO COME:</span> thousands more Polaroids, paintings, music, and more.</div>
            <div className={styles.paragraph}>If you or anyone you know have any pieces of his that you would like to add to the archive <span className={styles.highlight}>please reach out</span> via the contact page.</div>
            <div className={styles.signature}><span className={styles.heart}>&#9825;</span> Friends of Sonatore</div>
        </div>
    );
}