import { ButtonHTMLAttributes } from "react";

import styles from './CreateButton.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton({...props}: ButtonProps) {
    return (
        <button className={styles.button} {...props}>
            Criar
        </button>
    ) 
}