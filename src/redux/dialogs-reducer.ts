import { ActionsTypes, DialogsPageType } from '../Types'
import { v1 } from 'uuid'

export const addNewMessage = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody,
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
}

export const dialogsReducer = (
    state: DialogsPageType = initialState,
    action: ActionsTypes
): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: v1(), message: body }],
            }
        default:
            return state
    }
}
