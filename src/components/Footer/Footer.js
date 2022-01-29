import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => (
    <div className={styles.footer}>
        <div>
            Made with&nbsp;
            <span className={styles.heart}>♥</span>
            &nbsp;by Guthrie Schoolar
        </div>
    </div>
);
