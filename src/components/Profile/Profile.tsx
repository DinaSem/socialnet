import React from 'react';

import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type PropsType = {
    profile: null
}

function Profile(props:PropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>)
}

export default Profile;