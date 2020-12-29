import { connect, ConnectedProps } from 'react-redux'
import {
    addNewMessage,
    onNewMessageChange,
} from '../../redux/dialogs-reducer'
import { RootStateType } from '../../Types'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: RootStateType) => ({
    dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = (dispatch: any) => ({
    onNewMessageChange: (text: string) => {
        dispatch(onNewMessageChange(text))
    },
    addNewMessage: () => {
        dispatch(addNewMessage())
    },
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export type DialogsPropsFromRedux = ConnectedProps<typeof connector>
export const DialogsContainer = connector(Dialogs)
