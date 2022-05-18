import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type PropsType = {
    profile: null
    status:string
    updateStatusThunk:Function
    isOwner:boolean
    savePhotoThunk?:any
}

function Profile(props:PropsType) {
    return (
        <div>

            <ProfileInfo savePhotoThunk={props.savePhotoThunk} profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} isOwner={props.isOwner} />
            <MyPostsContainer/>
        </div>)
}

export default Profile;