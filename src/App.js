import { BingoBoard, BingoTitle, Body, Footer, GameControls, Header } from './components';
import { GameContext } from './context';
import { useContext } from 'react';
import styles from './App.module.scss';

export const App = () => {
    const { isBlackout } = useContext(GameContext);
    
    return (
        <div className={styles.App}>
            <Header isBlackout={isBlackout()} setIsBlackout={() => {}}/>
            <Body>
                <BingoTitle />
                <BingoBoard boardIndex={0} showLabel={true} first />
                {!isBlackout() && <>
                    <BingoBoard boardIndex={1} />
                    <BingoBoard boardIndex={2} />
                </>}
                <GameControls />
            </Body>
            <Footer />
        </div>
    );
}