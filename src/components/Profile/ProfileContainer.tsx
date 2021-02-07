import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
import { ProfileType } from '../../Types'

type PathParamsType = {
    userId: any
}

type PropsType = RouteComponentProps<PathParamsType> & ConnectedPropsType

class ProfileClassContainer extends React.Component<PropsType> {
    refreshProfile = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount = () => {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}
type MSTPType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MDTPType = {
    getProfile: any
    getStatus: any
    updateStatus: any
    savePhoto: any
    saveProfile: any
}
type ConnectedPropsType = MSTPType & MDTPType

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter,
    withAuthRedirect
)(ProfileClassContainer)

export default ProfileContainer
