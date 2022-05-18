import s from "./ProfileInfo.module.css";
import React, {ChangeEvent} from "react";
import {Preloader} from "../Users/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {UsersType} from "../../redux/users-reducer";
import userPhoto from '../Users/user.png'
import style from "./Profile.module.css";
import {savePhotoThunk} from "../../redux/profile-reducer";

type PropsType = {
    profile: UsersType|null
    status:string
    updateStatusThunk:Function
    isOwner:boolean
    savePhotoThunk:Function

}
function ProfileInfo({profile,status,updateStatusThunk,isOwner,savePhotoThunk}:PropsType){
    if (!profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>)=>{
        // @ts-ignore
        if(e.target.files.length){
            debugger
            // @ts-ignore
            savePhotoThunk(e.target.files[0])
        }

    }
    // @ts-ignore
    return(
        <div>
            <div className={s.dicription}>
                <img src={profile.photos.large || userPhoto} alt={'avatar'} className={style.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk} />
            </div>
        </div>
    )
}
export default ProfileInfo;