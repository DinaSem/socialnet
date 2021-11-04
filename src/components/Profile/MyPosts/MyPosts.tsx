import React from 'react';
import state, {PostsType, ProfilePageType} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



type MyPostsType={

    posts:Array<PostsType>
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(m =>
        <Post message={m.message} likesCount={m.likesCount}/>)

    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;