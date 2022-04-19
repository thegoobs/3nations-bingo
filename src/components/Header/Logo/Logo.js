import React from 'react';
import styles from './Logo.module.scss';

export const Logo = () => (
    <a target="_blank" href="https://3nationsbrewing.com/" rel="noreferrer" >
        <img className={styles.logo} alt='' src='https://3nationsbrewing.com/wp-content/uploads/2020/07/3NB-logo.png' />
    </a>
);
