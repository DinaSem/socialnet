import React from 'react';
import state, {ProfilePageType} from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";


type ProfileType={
    profilePage:ProfilePageType
}

function Profile(props: ProfileType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}/>
        </div>)
}

export default Profile;