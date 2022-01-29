import React from 'react';
import styles from './ClearBoard.module.scss';

export const ClearBoard = ({ onClick }) => (
    <button onClick={e => onClick && onClick(e)} className={styles.clearBoard}>New Game</button>
);
