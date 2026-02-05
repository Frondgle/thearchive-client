import { useState, useEffect } from 'react';
import styles from './DimensionDisplay.module.css';

export default function DimensionDisplay() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        updateDimensions();
        
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className={styles.dimensionDisplay}>
            {dimensions.width} × {dimensions.height}
        </div>
    );
}