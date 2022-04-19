import React from 'react';
import styles from './Footer.module.scss';
import { TipButton } from './TipButton/TipButton';
import { Signature } from './Signature/Signature';

export const Footer = () => (
    <div className={styles.footer}>
        <Signature />
        <TipButton />
    </div>
);
