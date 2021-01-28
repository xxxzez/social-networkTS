import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Profile } from './Profile'
import { setUserProfileTC } from '../../redux/profile-reducer'
import { RootStateType } from '../../Types'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type PathParamsType = {
    userId: string | undefined
}
export type ProfilePropsFromRedux = ConnectedProps<typeof connector>
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsFromRedux

class ProfileClassContainer extends React.Component<PropsType> {
    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '8250'
        }
        this.props.setUserProfileTC(+(userId))
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
})

const connector = connect(mapStateToProps, { setUserProfileTC })

const ProfileClassContainerWithRouter = withRouter(ProfileClassContainer)
export const ProfileContainer = connector(ProfileClassContainerWithRouter)
