import s from "./ProfileInfo.module.css";
import React from "react";
import {Preloader} from "../Users/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type PropsType = {
    profile: null
    status:string
    updateStatusThunk:Function
}
function ProfileInfo(props:PropsType){
    if (!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            <div className={s.dicription}>
                <img src={props.profile} alt={''}/>
                <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
            </div>
        </div>
    )
}
export default ProfileInfo;