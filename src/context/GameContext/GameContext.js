import { createContext, useState } from 'react';

export const GameContext = createContext(null);
export const GameProvider = props => {
    const [boards, setBoards] = useState([
        [createBingoRow(1, 15), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
        [createBingoRow(1, 15), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
        [createBingoRow(1, 15), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)]
    ]);
    const [blackout, setBlackout] = useState(false);

    return (<GameContext.Provider value={{ boards, getBoard, resetBoards, toggleSelected, isBlackout, toggleBlackout }}>{props.children}</GameContext.Provider>)

    function getBoard(index = 0) {
        return boards[index];
    }
    
    function resetBoards() {
        setBoards([
            [createBingoRow(1, 15), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
            [createBingoRow(1, 15), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
            [createBingoRow(1, 15), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)]
        ]);
    }
    
    function createBingoRow(min, max, freeSpace = false) {
        const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min).toString();
        let rowValues = [];
    
        while (rowValues.length < 5) {
            let nextValue = getRandomNumber(min, max);
    
            while (rowValues.includes(nextValue)) {
                nextValue = getRandomNumber(min, max);
            }
    
            rowValues.push(nextValue);
        }
    
        if (freeSpace) {
            rowValues[2] = 'free';
        }

        return rowValues.map(value => ({ value, selected: false }));
    }

    function toggleSelected(boardIndex, columnIndex, rowIndex) {
        const newBoards = boards.slice();
        newBoards[boardIndex][columnIndex][rowIndex].selected = !newBoards[boardIndex][columnIndex][rowIndex].selected;

        setBoards(newBoards);
    }

    function isBlackout() {
        return blackout;
    }

    function toggleBlackout() {
        console.log('toggling');
        setBlackout(!!!blackout);
    }
};
