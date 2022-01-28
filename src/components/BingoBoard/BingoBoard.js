import React from 'react';
import styles from './BingoBoard.module.scss';

export const BingoBoard = () => (
    <div className={styles.bingoBoard}>
        {'bingo'.split().map(column => (
            <span>{column}</span>
        ))}
    </div>
);
