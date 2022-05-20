import s from "./ProfileInfo.module.css";
import React, {ChangeEvent, FC, useState} from "react";
import {Preloader} from "../Users/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../Users/user.png'
import style from "./Profile.module.css";
import {ProfileDataType} from "../../redux/profile-reducer";

type PropsType = {
    profile: null | ProfileDataType
    status: string
    updateStatusThunk: Function
    isOwner: boolean
    savePhotoThunk: Function
}

function ProfileInfo({profile, status, updateStatusThunk, isOwner, savePhotoThunk}: PropsType) {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            debugger
            // @ts-ignore
            savePhotoThunk(e.target.files[0])
        }
    }

    // @ts-ignore
    return (
        <div>
            <div className={s.dicription}>
                <img src={profile.photos.large || userPhoto} alt={'avatar'} className={style.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData changeModeHandler={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: null | ProfileDataType
    isOwner: boolean
    changeModeHandler: any
}

const ProfileData: FC<ProfileDataPropsType> = ({isOwner, profile, changeModeHandler}) => {

    return <div>
        {isOwner && <div>
            <button onClick={changeModeHandler}>edit</button>
        </div>}

        {profile && <div>
            <div><b>Full name:</b> {profile.fullName ? 'yes' : 'no'}</div>

            <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile?.lookingForAJob &&
            <div>
                <b>My professionals skills:</b> {profile.lookingForAJobDescription}
            </div>
            }

            <div><b>About me:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
            {/*<div>*/}
            {/*    <b>Contacts</b> {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts(key)}/>*/}
            {/*})}*/}
            {/*</div>*/}
        </div>}


    </div>
}

type ProfileDateFirmPropsType = {
    profile: null | ProfileDataType
}
const ProfileDataForm: FC<ProfileDateFirmPropsType> = ({profile}) => {
    return (
        <div>
            {profile && <div>
                <div>
                    <div>
                        <b>Full name:</b> {profile.fullName ? 'yes' : 'no'}
                    </div>

                    <div>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {profile.lookingForAJob &&
                    <div>
                        <b>My professionals skills:</b> {profile.lookingForAJobDescription}
                    </div>
                    }

                    <div>
                        <b>About me:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {/*<div>*/}
                    {/*    <b>Contacts</b> {Object.keys(profile.contacts).map(key => {*/}
                    {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts(key)}/>*/}
                    {/*})}*/}
                    {/*</div>*/}

                </div>
            </div>}
        </div>
    )
}

const Contact = (contactTitle: any, contactValue: string) => {
    return <div><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;