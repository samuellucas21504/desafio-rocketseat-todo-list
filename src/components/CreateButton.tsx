import { ButtonHTMLAttributes } from "react";

import styles from './CreateButton.module.css';

export function CreateButton({...props}: ButtonHTMLAttributes<HTMLButtonElement> ) {
    return (
        <button className={styles.wrapper} {...props}>
            Criar
        </button>
    ) 
}