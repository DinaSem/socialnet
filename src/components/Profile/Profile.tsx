import React from 'react';
import state, {addPost, PostsType, ProfilePageType, updateNewPostText} from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo";


type ProfileType={
    profilePage:ProfilePageType
    addPost:() =>void
    updateNewPostText:(newText: string)=>void
    newPostText:string
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} updateNewPostText={updateNewPostText} />
        </div>)
}

export default Profile;