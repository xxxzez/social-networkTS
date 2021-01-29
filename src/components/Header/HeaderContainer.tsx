import React from 'react'
import { Header } from './Header'
import { getAuthUserData } from '../../redux/auth-reducer'
import { connect, ConnectedProps } from 'react-redux'
import { RootStateType } from '../../Types'

class HeaderClassContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
})
export type PropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, { getAuthUserData })
export const HeaderContainer = connector(HeaderClassContainer)
