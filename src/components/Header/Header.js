import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';
import { RoundLabel } from './RoundLabel/RoundLabel';

export const Header = () => (
    <div className={styles.header}>
        <div className={styles.left}>
            left
        </div>
        <Logo />
        <div className={styles.right}>
            <RoundLabel round={1} />
        </div>
    </div>
);
