import { connect, ConnectedProps } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addNewMessage } from '../../redux/dialogs-reducer'
import { RootStateType } from '../../Types'
import { Dialogs } from './Dialogs'

export type DialogsPropsFromRedux = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootStateType) => ({
    dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = (dispatch: any) => ({
    addNewMessage: (newMessageBody: string) => {
        dispatch(addNewMessage(newMessageBody))
    },
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export const DialogsContainer = compose<React.ComponentType>(
    connector,
    withAuthRedirect
)(Dialogs)
