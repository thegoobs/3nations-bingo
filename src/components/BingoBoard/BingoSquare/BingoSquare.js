import styles from './BingoSquare.module.scss';

export const BingoSquare = ({label = false, onClick, freeSpace = false, selected, children}) => {
    const classNames = [
        styles.bingoSquare,
        label && styles.label,
        freeSpace && styles.freeSpace,
        selected && styles.selected
    ].filter(Boolean).join(' ');
    let value = `${children}`.toUpperCase();

    return (
    <div className={classNames} onClick={() => onClick && onClick()}>
        <span className={styles.content}>{value}</span>
    </div>);
};
