import React, {ChangeEvent, RefObject} from 'react';
import state, {ActionsType, PostsType, ProfilePageType} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {type} from "os";


type MyPostsType = {

    posts: Array<PostsType>
    newPostText:string
    dispatch:(action:ActionsType)=>void

}

function MyPosts({dispatch,...props}:MyPostsType) {

    let postsElements = props.posts.map(m =>
        <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    const AddPostHandler = () => {
            dispatch({type:'ADD-POST'})
        }
const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
      dispatch({type: 'UPDATE-NEW-POST-TEXT',newText: e.currentTarget.value});
}
    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText} /></div>

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

function newPostText(type: () => string, arg1: string, value: string, newPostText: any) {
    throw new Error('Function not implemented.');
}
