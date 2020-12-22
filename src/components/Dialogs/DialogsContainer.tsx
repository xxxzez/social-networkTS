import { connect, ConnectedProps } from 'react-redux'
import {
    sendMessageTextAC,
    updateNewMessageTextAC,
} from '../../redux/dialogs-reducer'
import { RootStateType } from '../../Types'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: RootStateType) => ({
    dialogsPage: state.dialogsPage
})

const mapDispatchToProps = (dispatch: any) => ({
    onNewMessageChange: (text: string) => {
        dispatch(updateNewMessageTextAC(text))
    },
    addNewMessage: () => {
        dispatch(sendMessageTextAC())
    },
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export type DialogsPropsFromRedux = ConnectedProps<typeof connector>

export const DialogsContainer = connector(Dialogs)
