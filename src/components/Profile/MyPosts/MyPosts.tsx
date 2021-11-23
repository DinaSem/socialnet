import React, {ChangeEvent} from 'react';
import state, {
    ActionsType,
    addPostActionCreator,
    PostsType,
    ProfilePageType,
    updateNewPostTextActionCreator
} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


function MyPosts({dispatch, ...props}: MyPostsType) {

    let postsElements = props.posts.map(m =>
        <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    const AddPostHandler = () => {
        dispatch(addPostActionCreator())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = updateNewPostTextActionCreator(e.currentTarget.value)
        dispatch(action);
    }
    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText}/></div>

                <div>
                    <button onClick={AddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


