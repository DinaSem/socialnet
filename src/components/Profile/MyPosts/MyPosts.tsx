import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControl/FormsControls";


type MyPostsType = {
    posts: Array<PostsType>
    addPost: (values: string) => void
}

const MyPosts = React.memo((props: MyPostsType) =>{
    let postsElements = props.posts.map(m =>
        <Post key={m.id} message={m.message} likesCount={m.likesCount}/>)


    const addNewPost = (values: {newPostsText: string}) => {
        props.addPost(values.newPostsText)
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
})
const maxLenght20 = maxLenghtCreator(20)
const AddPostForm = (props: any) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newPostsText' placeholder='Enter your post'
                  validate={[required, maxLenght20]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>)
}
const AddNewPostFormRedux: any  = reduxForm({form: 'postsAddPostsForm'})(AddPostForm)
export default MyPosts;


