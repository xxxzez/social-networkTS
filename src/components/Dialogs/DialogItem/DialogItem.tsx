import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./DialogItem.module.css"

export type DialogType = {
    name: string
    id: number
}
const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
