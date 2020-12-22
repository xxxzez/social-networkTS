import { Button, TextField } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { DialogsPropsFromRedux } from './DialogsContainer'
import Message from './Message/Message'

type PropsType = DialogsPropsFromRedux

export const Dialogs: React.FC<PropsType> = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ))
    const messagesElements = props.dialogsPage.messages.map((m) => (
        <Message key={m.id} message={m.message} id={m.id} />
    ))
    const addNewMessage = () => {
        props.addNewMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <TextField
                        name="newMessage"
                        placeholder="Send"
                        onChange={onNewMessageChange}
                        value={props.dialogsPage.newMessageBody}
                    ></TextField>
                    <Button onClick={addNewMessage}>Send</Button>
                </div>
            </div>
        </div>
    )
}
