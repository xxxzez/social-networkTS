import { addPostAC, onPostChangeAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { RootStateType } from '../../../Types'

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (text: string) => {
            dispatch(onPostChangeAC(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
