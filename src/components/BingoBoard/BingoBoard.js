import styles from './BingoBoard.module.scss';
import { BingoSquare } from './BingoSquare/BingoSquare';


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const board = [getBingoRow(1, 9), getBingoRow(16, 30), getBingoRow(31, 45, true), getBingoRow(46, 60), getBingoRow(61, 75)];

export const BingoBoard = () => (
    <div className={styles.bingoBoard}>
        <div className={styles.bingoLabels}>
            {'BINGO'.split('').map(column => (
                <BingoSquare label={true}>{column}</BingoSquare>
            ))}
        </div>
        <hr />
        <div className={styles.bingoElements}>
            {board.map(column => column.map(row => (
                <BingoSquare freeSpace={row === 'free'}>{row}</BingoSquare>
            )))}
        </div>
    </div>
);


function getBingoRow(min, max, freeSpace = false) {
    let row = [];

    while (row.length < 5) {
        console.log(row, row.length);
        let nextValue = getRandomNumber(min, max);

        while (row.includes(nextValue)) {
            nextValue = getRandomNumber(min, max);
            console.log(nextValue);
        }

        row.push(nextValue);
    }

    if (freeSpace) {
        row[2] = 'free';
    }
    return row;
}