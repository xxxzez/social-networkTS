import React from 'react'
import { Header } from './Header'
import { logout } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'

type MSTPType = {
    isAuth: boolean
    login: string | null
    email: string | null
}
type MDTPType = {
    logout: any
}
type PropsType = MSTPType & MDTPType
class HeaderClassContainer extends React.Component<PropsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
})
export const HeaderContainer = connect(mapStateToProps, { logout })(
    HeaderClassContainer
)
