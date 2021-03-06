import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { actions } from '../../redux/dialogs-reducer'
import { AppStateType } from '../../redux/store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage,
})

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        addNewMessage: actions.addNewMessage,
    }),
    withAuthRedirect
)(Dialogs)
export default DialogsContainer
