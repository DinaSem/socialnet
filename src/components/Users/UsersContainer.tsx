import React from 'react';
import { connect } from 'react-redux';
import {Users} from "./Users";
import {adduserAC, followAC, initialUsersStateTypes, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from 'redux'
import {AppStateType} from "../../redux/redux-store";

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {

    users:UsersType[]
}
type mapDispatchToPropsType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    addusers:(users:UsersType[])=>void
}


let mapStateToProps = (state: AppStateType):mapStateToPropsType =>{
    return{users: state.usersPage.users}
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType =>{
return{
    follow:(userId:number) =>{
        dispatch(followAC(userId))
    },
    unfollow:(userId:number) =>{
        dispatch(unfollowAC(userId))
    },
    addusers:(users:UsersType[]) =>{
        dispatch(adduserAC(users))
    }
}
}

export default connect (mapStateToProps, mapDispatchToProps)(Users)