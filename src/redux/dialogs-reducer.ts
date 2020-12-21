import { ActionsTypes, DialogsPageType } from '../Types'
import { v1 } from 'uuid'

export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        text: newMessageText,
    } as const
}
export const sendMessageTextAC = (newMessageText: string) => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}

const initialState = {
    dialogs: [
        { id: v1(), name: 'Dashiki' },
        { id: v1(), name: 'Tommy' },
        { id: v1(), name: 'Vlad' },
        { id: v1(), name: 'Igor' },
        { id: v1(), name: 'Andrew' },
    ],
    messages: [
        { id: v1(), message: 'Whats going on' },
        { id: v1(), message: 'Hello amigo' },
        { id: v1(), message: 'My last message' },
        { id: v1(), message: 'Miss me?' },
        { id: v1(), message: 'See u tomorrow' },
    ],
    newMessageBody: '',
}

export const dialogsReducer = (
    state: DialogsPageType = initialState,
    action: ActionsTypes
): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageBody = action.text
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            let newMessageId = v1()
            state.newMessageBody = ''
            state.messages.push({ id: newMessageId, message: body })
            return state
        default:
            return state
    }
}
