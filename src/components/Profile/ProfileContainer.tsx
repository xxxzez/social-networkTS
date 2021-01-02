import axios from 'axios'
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Profile } from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../Types'

class ProfileClassContainer extends React.Component<ProfilePropsFromRedux> {
    componentDidMount = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
})
const connector = connect(mapStateToProps, { setUserProfile })
export type ProfilePropsFromRedux = ConnectedProps<typeof connector>
export const ProfileContainer = connector(ProfileClassContainer)
