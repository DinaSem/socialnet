import React from 'react';
import {ActionsType, storeType,} from '../../redux/store';
import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type ProfileType = {
    //profilePage: ProfilePageType
    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    //newPostText: string
    //dispatch: (action: ActionsType) => void
    //store: storeType
}

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>)
}

export default Profile;