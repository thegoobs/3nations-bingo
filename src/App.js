import { useContext } from 'react';
import styles from './App.module.scss';
import { Header, Footer, BingoBoard, Body, GameControls } from './components';
import { GameContext } from './context';

export const App = () => {
    const { isBlackout } = useContext(GameContext);
    
    return (
        <div className={styles.App}>
            <Header isBlackout={isBlackout()} setIsBlackout={() => {}}/>
            <Body>
                <BingoBoard boardIndex={0} showLabel={true} first last={isBlackout()} />
                {!isBlackout() && <>
                    <BingoBoard boardIndex={1} />
                    <BingoBoard boardIndex={2} last />
                </>}
                <GameControls />
            </Body>
            <Footer />
        </div>
    );
}