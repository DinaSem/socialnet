import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostsType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";


type MyPostsType = {
    posts: Array<PostsType>
    addPost:(values:string)=>void
}


function MyPosts(props: MyPostsType) {
    let postsElements = props.posts.map(m =>
        <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)

    const addNewPost = (values:any) => {
        debugger
      props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlog}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props: any) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='newPostsText' placeholder='Enter your post'/>

            <div>
                <button>Add post</button>
            </div>
        </div>
    </form>)
}
const AddNewPostFormRedux = reduxForm({form: 'postsAddPostsForm'})(AddPostForm)
export default MyPosts;


