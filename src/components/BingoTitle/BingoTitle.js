import React from 'react';
import { BingoSquare } from '../BingoSquare/BingoSquare';
import styles from './BingoTitle.module.scss';

export const BingoTitle = () => (
    <div className={styles.BingoTitle}>
        {'BINGO'.split('').map(column => (
            <BingoSquare label>{column}</BingoSquare>
        ))}
    </div>
);
