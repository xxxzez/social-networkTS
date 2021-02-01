import React from 'react'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { DialogsPropsFromRedux } from './DialogsContainer'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'

type PropsType = DialogsPropsFromRedux

export const Dialogs: React.FC<PropsType> = React.memo((props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ))
    const messagesElements = props.dialogsPage.messages.map((m) => (
        <Message key={m.id} message={m.message} id={m.id} />
    ))

    const addMessage = (values: any) => {
        props.addNewMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addMessage} />
        </div>
    )
})

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newMessageBody"
                placeholder="Send"
                component="textarea"
            ></Field>
            <button>Send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
    AddMessageForm
)
