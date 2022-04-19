import React from 'react';
import styles from './TipButton.module.scss';

export const TipButton = () => (
    <div>
        <span>🍺</span>
        <a className={styles.TipButton} href="https://www.buymeacoffee.com/guthrie" target="_blank" rel="noreferrer">Buy me a beer!</a>
    </div>
);
