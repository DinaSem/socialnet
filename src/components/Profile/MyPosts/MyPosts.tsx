import React, {RefObject} from 'react';
import state, {addPost, PostsType, ProfilePageType} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsType = {

    posts: Array<PostsType>

    addPost:(text: string) =>void

}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(m =>
        <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const AddPostHandler = () => {
        if (newPostElement.current){
            let text = newPostElement.current.value;
            props.addPost(text)
        }
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