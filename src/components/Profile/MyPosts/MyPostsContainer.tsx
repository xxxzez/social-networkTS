import { connect, ConnectedProps } from 'react-redux'
import { RootStateType } from '../../../Types'
import { addPostAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state: RootStateType) => ({
    posts: state.profilePage.posts,
})
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPostAC(newPostBody))
        },
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export type MyPostsPropsFromRedux = ConnectedProps<typeof connector>
const MyPostsContainer = connector(MyPosts)

export default MyPostsContainer
