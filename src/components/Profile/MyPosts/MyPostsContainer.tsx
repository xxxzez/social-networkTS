import { connect } from 'react-redux'
import { actions } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { AppStateType } from '../../../redux/store'

const mapStateToProps = (state: AppStateType) => ({
    posts: state.profilePage.posts,
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(actions.addPost(newPostBody))
        },
        deletePost: (userId: string) => {
            dispatch(actions.deletePost(userId))
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
