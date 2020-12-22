import { ActionsTypes, DialogsPageType } from '../Types'
import { v1 } from 'uuid'

export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        text: newMessageText,
    } as const
}
export const sendMessageTextAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}

const initialState: DialogsPageType = {
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
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            const stateCopy = { ...state }
            stateCopy.newMessageBody = action.text
            return stateCopy
        }
        case 'SEND-MESSAGE': {
            const stateCopy = { ...state }
            stateCopy.messages = [...state.messages]
            let body = state.newMessageBody
            let newMessageId = v1()
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({ id: newMessageId, message: body })
            return stateCopy
        }
        default:
            return state
    }
}
