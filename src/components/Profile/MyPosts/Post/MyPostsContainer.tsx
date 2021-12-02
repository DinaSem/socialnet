import React, {ChangeEvent} from 'react';
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';
import store, {ActionsType, RootStateType, storeType} from '../../../../redux/store';
import MyPosts from '../MyPosts';

import {connect} from "react-redux";
import {Dispatch} from "redux";


type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    //dispatch: (action: ActionsType) => void
    state: RootStateType
    store: storeType
}
type mapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type mapDispatchToPropsType ={
    updateNewPostText:(text: string)=>void
    addPost:()=>void
}
export type MyPostContainerType = mapStateToPropsType & mapDispatchToPropsType


/*function MyPostsContainer(props: MyPostsType) {

    return (<StoreContext.Consumer>
            {
            (store)=> {
                let state = store.getState()
                const AddPostHandler = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);
                }
                    return <MyPosts  store={store} posts={state.profilePage.posts} updateNewPostText={onPostChange}
                     addPost={AddPostHandler}
                     newPostText={state.profilePage.newPostText}/>}
        }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) :mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;


