import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type  MyPostsType={
    message:string
    likesCount:string
}

function MyPosts(props:MyPostsType) {
    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message = "Hi, how are you?" likesCount = "0"/>
                <Post message = "Hello" likesCount = "23"/>
            </div>
        </div>
    )
}

export default MyPosts;