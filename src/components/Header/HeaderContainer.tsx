import React from 'react'
import { Header } from './Header'
import { setAuthUserDataTC } from '../../redux/auth-reducer'
import { connect, ConnectedProps } from 'react-redux'
import { RootStateType } from '../../Types'

class HeaderClassContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setAuthUserDataTC()
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
})
export type PropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, { setAuthUserDataTC })
export const HeaderContainer = connector(HeaderClassContainer)
