import React from 'react';
import styles from './RoundLabel.module.scss';

export const RoundLabel = props => (
    <div className={styles.roundLabel}>Round {props.round} </div>
);
