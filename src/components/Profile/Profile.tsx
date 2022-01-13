import React from 'react';

import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type PropsType = {
    profile: null
    status:string
    updateStatusThunk:Function
}

function Profile(props:PropsType) {
    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} />
            <MyPostsContainer/>
        </div>)
}

export default Profile;