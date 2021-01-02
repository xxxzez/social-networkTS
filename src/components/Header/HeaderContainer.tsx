import axios from 'axios'
import React from 'react'
import { Header } from './Header'
import { setAuthUserData } from '../../redux/auth-reducer'
import { connect, ConnectedProps } from 'react-redux'
import { AuthType } from '../../Types'

export class HeaderClassContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AuthType) => ({
    isAuth: state.isAuth,
    login: state.login
})
export type PropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, { setAuthUserData })
export const HeaderContainer = connector(HeaderClassContainer)
