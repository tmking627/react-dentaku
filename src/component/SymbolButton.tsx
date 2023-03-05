import React from "react";
import styles from "./symbolbutton.module.css" ;

type SymbolButtonProps = {
    symbol: string,
    onClick?: () => void,
}

export const SymbolButton = (props: SymbolButtonProps) => {
    const {symbol,onClick} = props;

    return (
        <button className={styles.button} onClick={onClick}>
            {symbol}
        </button>
    );
}
