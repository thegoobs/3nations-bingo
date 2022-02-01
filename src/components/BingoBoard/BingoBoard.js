import { useContext } from 'react';
import { GameContext } from '../../context';
import styles from './BingoBoard.module.scss';
import { BingoSquare } from './BingoSquare/BingoSquare';


export const BingoBoard = ({ boardIndex = 0, first, last, showLabel = false }) => {
    const { getBoard, selectSquare } = useContext(GameContext);
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
                {getBoard(boardIndex).map((column, columnIndex) => column.map((square, rowIndex) => {
                    return <BingoSquare {...getBingoSquareProps(columnIndex, rowIndex, square)}>{square.value}</BingoSquare>
                }))}
            </div>
        </div>
    );

    function handleClick(boardIndex, column, row) {
        selectSquare(boardIndex, column, row);
    }

    function getBingoSquareProps(columnIndex, rowIndex, square) {
        return {
            selected: square.selected,
            key: `${boardIndex}-${columnIndex}-${rowIndex}`,
            onClick: () => handleClick(boardIndex, columnIndex, rowIndex),
            freeSpace: square.value === 'free'
        }
    }
};
