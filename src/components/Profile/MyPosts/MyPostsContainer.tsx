import { connect, ConnectedProps } from 'react-redux'
import { RootStateType } from '../../../Types'
import { addPostAC, onPostChangeAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state: RootStateType) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
})
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(onPostChangeAC(text))
        },
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export type MyPostsPropsFromRedux = ConnectedProps<typeof connector>
const MyPostsContainer = connector(MyPosts)

export default MyPostsContainer
