import { connect, ConnectedProps } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addNewMessage, onNewMessageChange } from '../../redux/dialogs-reducer'
import { RootStateType } from '../../Types'
import { Dialogs } from './Dialogs'

export type DialogsPropsFromRedux = ConnectedProps<typeof connector>

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
export const DialogsContainer = compose(connector, withAuthRedirect)(Dialogs)
