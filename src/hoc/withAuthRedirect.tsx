import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootStateType } from '../Types'

const mapStateToPropsForRedirect = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
