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

export const dialogsReducer = (
    state: DialogsPageType,
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
