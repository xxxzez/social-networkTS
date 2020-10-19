import React from "react"
import { MessageType } from "../../.."
import styles from "./Message.module.css"

const Message: React.FC<MessageType> = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Message
