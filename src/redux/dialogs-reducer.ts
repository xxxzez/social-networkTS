import { ActionsTypes, DialogsPageType } from '../Types'

export const dialogsReducer = (
    state: DialogsPageType,
    action: ActionsTypes
) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageBody = action.text
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 6, message: body })
            return state
        default:
            return state
    }
}
