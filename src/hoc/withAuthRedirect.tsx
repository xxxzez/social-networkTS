import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../redux/store'

type MSTPType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MSTPType => ({
    isAuth: state.auth.isAuth,
})

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    class RedirectComponent extends React.Component<MSTPType> {
        render() {
            let { isAuth, ...restProps } = this.props

            if (!isAuth) {
                return <Redirect to="/login" />
            }
            return <Component {...(restProps as WCP)} />
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}
