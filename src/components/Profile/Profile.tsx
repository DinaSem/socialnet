import React from 'react';
import state, {ActionsType,PostsType, ProfilePageType, } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo";


type ProfileType={
    profilePage:ProfilePageType
    addPost?:() =>void
    updateNewPostText?:(newText: string)=>void
    newPostText:string
    dispatch:(action:ActionsType)=>void
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
        </div>)
}

export default Profile;