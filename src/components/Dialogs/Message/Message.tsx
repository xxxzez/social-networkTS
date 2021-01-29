import React from 'react'
import { MessageType } from '../../../Types'
import s from './Message.module.css'

const Message: React.FC<MessageType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message
