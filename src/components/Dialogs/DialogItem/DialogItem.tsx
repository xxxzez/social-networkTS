import React from "react"
import { NavLink } from "react-router-dom"
import { DialogType } from "../../.."
import styles from "./DialogItem.module.css"

const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
