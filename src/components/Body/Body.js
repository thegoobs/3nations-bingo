import React from 'react';
import styles from './Body.module.scss';

export const Body = props => (
    <div className={styles.body}>{props.children}</div>
);
