import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Profile } from './Profile'
import {
    getProfile,
    getStatus,
    updateStatus,
} from '../../redux/profile-reducer'
import { RootStateType } from '../../Types'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

type PathParamsType = {
    userId: any
}
export type ProfilePropsFromRedux = ConnectedProps<typeof connector>
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsFromRedux

class ProfileClassContainer extends React.Component<PropsType> {
    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

const connector = connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
})

export const ProfileContainer = compose<React.ComponentType>(
    connector,
    withRouter,
    withAuthRedirect
)(ProfileClassContainer)
