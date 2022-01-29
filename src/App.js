import { useContext, useState } from 'react';
import styles from './App.module.scss';
import { Header, Footer, BingoBoard, Body, ClearBoard } from './components';
import { GameContext } from './context';

export const App = () => {
    const [isBlackout, setIsBlackout] = useState(false);
    const {getBoard, resetBoards} = useContext(GameContext);
    
    return (
        <div className={styles.App}>
            <Header isBlackout={isBlackout} setIsBlackout={setIsBlackout}/>
            <Body>
                <BingoBoard board={getBoard(0)} showLabel={true} first last={isBlackout} />
                {!isBlackout && <>
                    <BingoBoard board={getBoard(1)} />
                    <BingoBoard board={getBoard(2)} last />
                </>}
                <ClearBoard onClick={handleClearBoard}/>
            </Body>
            <Footer />
        </div>
    );

    function handleClearBoard(event) {
        resetBoards();
    }
}