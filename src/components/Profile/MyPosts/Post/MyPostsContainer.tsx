//import React from 'react';
import {addPostActionCreator, PostsType} from '../../../../redux/profile-reducer';
import {AppStateType} from '../../../../redux/redux-store';
import MyPosts from '../MyPosts';
import {connect} from "react-redux";
import {Dispatch} from "redux";


// type MyPostsType = {
//     posts: Array<PostsType>
//     newPostText: string
// }
type mapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostContainerType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;


