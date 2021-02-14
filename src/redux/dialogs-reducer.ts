import { DialogType, MessageType } from './../Types'
import { v1 } from 'uuid'
import { InferActionsTypes } from './store'

export const actions = {
    addNewMessage: (newMessageBody: string) =>
        ({
            type: 'SEND-MESSAGE',
            newMessageBody,
        } as const),
}

const initialState = {
    dialogs: [
        { id: v1(), name: 'Dashiki' },
        { id: v1(), name: 'Tommy' },
        { id: v1(), name: 'Vlad' },
        { id: v1(), name: 'Igor' },
    ] as DialogType[],
    messages: [
        { id: v1(), message: 'Whats going on' },
        { id: v1(), message: 'Hello amigo' },
        { id: v1(), message: 'My last message' },
        { id: v1(), message: 'Miss me?' },
        { id: v1(), message: 'See u tomorrow' },
    ] as MessageType[],
}

export const dialogsReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
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
type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
