import React, {ChangeEvent, RefObject} from 'react';
import state, {addPost, PostsType, ProfilePageType} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsType = {

    posts: Array<PostsType>
    addPost:() =>void
    newPostText:string
    updateNewPostText:(newText: string)=>void

}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(m =>
        <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    const AddPostHandler = () => {
            props.addPost()
        }
const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
         props.updateNewPostText(e.currentTarget.value);
}
    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText} ></textarea></div>

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