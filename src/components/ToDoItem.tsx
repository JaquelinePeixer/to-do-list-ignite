import styles from './ToDoItem.module.css';
import { Trash } from "phosphor-react";
import { FormEvent, HtmlHTMLAttributes, InputHTMLAttributes, useRef, useState } from 'react';

interface ToDoItem {
    id: number,
    content: string,
    isChecked: boolean,
    onDeleteComment: Function,
    onChangeChecked: Function
}

export function ToDoItem({ id, content, isChecked, onDeleteComment, onChangeChecked }: ToDoItem) {

    const [newIsChecked, setNewIsChecked] = useState(isChecked)

    function handleDeleteItem() {
        onDeleteComment(id)
    }

    function handleChangeChecked() {
        setNewIsChecked(!isChecked)
        onChangeChecked(id)        
    }

    return (
        <div className={styles.toDo}>
            <label className={styles.container}>
                {newIsChecked
                    ? <input type="checkbox" onChange={handleChangeChecked} checked />
                    : <input type="checkbox" onChange={handleChangeChecked} />
                }
                <span className={styles.checkmark}></span>
            </label>


            {newIsChecked
                ? <span className={(styles.content, styles.textLineThorugh)}>{content}</span>
                : <span className={styles.content}>{content}</span>
            }

            <button className={styles.delete} onClick={handleDeleteItem}>
                <Trash size={16} />
            </button>
        </div>
    )
}