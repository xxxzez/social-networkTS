import React from "react"
import styles from "./Message.module.css"

export type MessageType = {
    id: number
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Message
