import React, {ChangeEvent} from 'react';
import {ActionsType, storeType} from '../../../redux/store';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostContainerType} from "./Post/MyPostsContainer";
import {PostsType} from "../../../redux/profile-reducer";


type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    //dispatch: (action: ActionsType) => void
    //addPost:()=>void
    //updateNewPostText: (newText: string) => void
    store: storeType

}


function MyPosts(props: MyPostContainerType) {
    let postsElements = props.posts.map(m =>
        <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText}/></div>

                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


