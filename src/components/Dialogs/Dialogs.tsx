import React from "react"
import { DialogType, MessageType } from "../.."
import DialogItem from "./DialogItem/DialogItem"
import styles from "./Dialogs.module.css"
import Message from "./Message/Message"

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<PropsType> = (props) => {
    const dialogsElements = props.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ))
    const messagesElements = props.messages.map((m) => (
        <Message message={m.message} id={m.id} />
    ))
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>{messagesElements}</div>
        </div>
    )
}

export default Dialogs
