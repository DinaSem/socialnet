import React, {FC} from 'react';
import {ProfileDataType} from "../../redux/profile-reducer";
import {createFields, Input} from "../common/FormControl/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    profile: null | ProfileDataType
    onSubmit: Function
}



export const ProfileDataForm:  FC<any> = ({handleSubmit,profile}) => {
// export const ProfileDataForm =  ({profile}:PropsType) => {
//     const profile =useSelector<AppStateType, null | ProfileDataType>(state => state.profilePage.profile)
    return (
        <form onSubmit={handleSubmit}>
            {profile && <div>
                <div>
                    <div>
                        <button onClick={()=>{}}>save</button>
                    </div>

                    <div>
                        <b>Full name:</b> {createFields('Full name','Full name',[],Input)}
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
                    {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
                    {/*})}*/}
                    {/*</div>*/}

                </div>
            </div>}
        </form>
    );
};




const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'}) (ProfileDataForm)
