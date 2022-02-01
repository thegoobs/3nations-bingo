import { useContext, useState } from 'react';
import styles from './App.module.scss';
import { Header, Footer, BingoBoard, Body, ClearBoard } from './components';
import { GameContext } from './context';

export const App = () => {
    const [isBlackout, setIsBlackout] = useState(false);
    const { resetBoards } = useContext(GameContext);
    
    return (
        <div className={styles.App}>
            <Header isBlackout={isBlackout} setIsBlackout={setIsBlackout}/>
            <Body>
                <BingoBoard boardIndex={0} showLabel={true} first last={isBlackout} />
                {!isBlackout && <>
                    <BingoBoard boardIndex={1} />
                    <BingoBoard boardIndex={2} last />
                </>}
                <ClearBoard onClick={resetBoards}/>
            </Body>
            <Footer />
        </div>
    );
}