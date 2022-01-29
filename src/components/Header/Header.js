import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';
import { RoundLabel } from './RoundLabel/RoundLabel';

export const Header = ({ isBlackout = false, setIsBlackout }) => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
            </div>
            <Logo />
            <div className={styles.right}>
                <div className={styles.modeSelector}>
                    <div onClick={() => handleModeChange(false)} className={!isBlackout && styles.selected}>Rounds 1-5</div>
                    <div onClick={() => handleModeChange(true)} className={isBlackout && styles.selected}>Blackout</div>
                </div>
            </div>
        </div>
    );

    function handleModeChange(setToBlackout) {
        setIsBlackout && setIsBlackout(setToBlackout);
    }
};
