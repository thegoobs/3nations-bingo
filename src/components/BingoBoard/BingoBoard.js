import styles from './BingoBoard.module.scss';
import { BingoSquare } from './BingoSquare/BingoSquare';


export const BingoBoard = ({ board, first, last, showLabel = false }) => {
    const classNames = [
        first && styles.first,
        last && styles.last,
        styles.bingoBoard
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames}>
            {showLabel && <>
                <div className={styles.bingoLabels}>
                    {'BINGO'.split('').map(column => (
                        <BingoSquare label={true}>{column}</BingoSquare>
                    ))}
                </div>
            </>}
            <hr />
            <div className={styles.bingoElements}>
                {board.map(column => column.map(row => (
                    <BingoSquare freeSpace={row === 'free'}>{row}</BingoSquare>
                )))}
            </div>
        </div>
    );
};
