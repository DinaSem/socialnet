import s from "./ProfileInfo.module.css";
import React from "react";
import {Preloader} from "../Users/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type PropsType = {
    profile: null
    status:string
    updateStatusThunk:Function
}
function ProfileInfo({profile,status,updateStatusThunk}:PropsType){
    if (!profile){
        return <Preloader/>
    }
    return(
        <div>
            <div className={s.dicription}>
                <img src={profile} alt={''}/>
                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk} />
            </div>
        </div>
    )
}
export default ProfileInfo;