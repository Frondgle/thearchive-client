import styles from './Blurb.module.css';

export default function Blurb({children}) {
    return (
        <div className={styles.blurbContainer}>
            {children}
        </div>
    );
}