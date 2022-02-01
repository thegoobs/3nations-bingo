import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
            </div>
            <Logo />
            <div className={styles.right}>
            </div>
        </div>
    );
};
