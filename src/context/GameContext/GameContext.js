import { createContext, useState } from 'react';

export const GameContext = createContext(null);
export const GameProvider = props => {
    const [boards, setBoards] = useState([
        [createBingoRow(1, 9), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
        [createBingoRow(1, 9), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
        [createBingoRow(1, 9), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)]
    ]);

    return (<GameContext.Provider value={{ boards, getBoard, resetBoards }}>{props.children}</GameContext.Provider>)

    function getBoard(index = 0) {
        return boards[index];
    }
    
    function resetBoards() {
        setBoards([
            [createBingoRow(1, 9), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
            [createBingoRow(1, 9), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)],
            [createBingoRow(1, 9), createBingoRow(16, 30), createBingoRow(31, 45, true), createBingoRow(46, 60), createBingoRow(61, 75)]
        ]);
    }
    
    function createBingoRow(min, max, freeSpace = false) {
        const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
        let row = [];
    
        while (row.length < 5) {
            let nextValue = getRandomNumber(min, max);
    
            while (row.includes(nextValue)) {
                nextValue = getRandomNumber(min, max);
            }
    
            row.push(nextValue);
        }
    
        if (freeSpace) {
            row[2] = 'free';
        }
        return row;
    }
};
