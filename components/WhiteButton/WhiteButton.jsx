import styles from './WhiteButton.module.css';

export default function WhiteButton({ children, onClick }) {
    return (
        <button onClick={onClick} className={styles.whiteButton}>
            {children}
        </button>
    );
}