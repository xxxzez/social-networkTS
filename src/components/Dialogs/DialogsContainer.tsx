import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addNewMessage } from '../../redux/dialogs-reducer'
import { AppStateType } from '../../redux/store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = (dispatch: any) => ({
    addNewMessage: (newMessageBody: string) => {
        dispatch(addNewMessage(newMessageBody))
    },
})

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
export default DialogsContainer
