import React from "react"
import { MessageType } from "../../../redux/state"
import s from "./Message.module.css"

const Message: React.FC<MessageType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message
