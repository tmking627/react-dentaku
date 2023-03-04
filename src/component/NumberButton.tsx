import React from "react";
import styles from "./numberbutton.module.css" ;

type NumberButtonProps = {
    number: number,
    onClick?: () => void,
}

export const NumberButton = (props: NumberButtonProps) => {
    const {number,onClick} = props;

    return (
        <button className={styles.button} onClick={onClick}>
            {number}
        </button>
    );
}
