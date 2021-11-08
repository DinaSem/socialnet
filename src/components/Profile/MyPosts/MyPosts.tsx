import React, { RefObject } from 'react';
import state, {PostsType, ProfilePageType} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



type MyPostsType={

    posts:Array<PostsType>
    AddPostHandler:()=>void
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(m =>
        <Post message={m.message} likesCount={m.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
const AddPostHandler =() => {
 let text = newPostElement.current?.value
}
    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
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