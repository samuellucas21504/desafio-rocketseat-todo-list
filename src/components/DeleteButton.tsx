import { ButtonHTMLAttributes } from "react";

import styles from './DeleteButton.module.css';

export function DeleteButton({...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={styles.wrapper} {...props}>
           X 
        </button>
    )
}