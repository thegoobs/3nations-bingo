import { useState }from 'react';
import styles from './BingoSquare.module.scss';

export const BingoSquare = ({label = false, freeSpace = false, children}) => {
    const [selected, setSelected] = useState(false);
    const classNames = [
        styles.bingoSquare,
        label && styles.label,
        freeSpace && styles.freeSpace,
        selected && styles.selected
    ].filter(Boolean).join(' ');
    const value = `${children}`.toUpperCase();

    return (<div className={classNames} onClick={handleClick}>{value}</div>);

    function handleClick() {
        if (!label) {
            setSelected(!selected);
        }
    }
};
