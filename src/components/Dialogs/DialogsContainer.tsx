
import { connect } from 'react-redux'
import {
    sendMessageTextAC,
    updateNewMessageTextAC,
} from '../../redux/dialogs-reducer'
import { RootStateType } from '../../Types'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onNewMessageChange: () => {
            dispatch(updateNewMessageTextAC(newMessageText))
        },
        addNewMessage: () => {
            dispatch(sendMessageTextAC())
        },
    }
}
export const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs)
