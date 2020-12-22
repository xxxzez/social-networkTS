import { connect, ConnectedProps } from 'react-redux'
import { ProfilePageType } from '../../../Types'
import { addPostAC, onPostChangeAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state: ProfilePageType) => {
    return {
        posts: state.posts,
        newPostText: state.newPostText,
    }
}
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
export type PropsFromRedux = ConnectedProps<typeof connector>
const MyPostsContainer = connector(MyPosts)

export default MyPostsContainer
