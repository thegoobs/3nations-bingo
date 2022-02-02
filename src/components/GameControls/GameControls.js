import { useContext } from 'react';
import styles from './GameControls.module.scss';
import { GameContext } from '../../context';

export const GameControls = () => {
    const { isBlackout, toggleBlackout, resetBoards } = useContext(GameContext);

    return (
        <div className={styles.gameControls}>
            <button onClick={handleResetClick} className={styles.gameReset}>New Game</button>
            <button onClick={handleBlackoutClick} className={styles.gameReset}>{isBlackout() ? 'Standard' : 'Blackout'}</button>
        </div>
    );

    function handleResetClick() {
        resetBoards();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    
    function handleBlackoutClick() {
        toggleBlackout();
        resetBoards();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
};
