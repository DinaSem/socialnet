import React from 'react';
import state, {addPost, PostsType, ProfilePageType} from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo";


type ProfileType={
    profilePage:ProfilePageType
    addPost:(text: string) =>void
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.profilePage.posts}/>
        </div>)
}

export default Profile;