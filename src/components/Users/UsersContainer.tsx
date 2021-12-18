import React from 'react';
import { connect } from 'react-redux';
import {Users} from "./Users";

import {
    adduserAC,
    followAC,
    initialUsersStateTypes,
    setCurrentPageAC, setTotalUserCountAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Dispatch} from 'redux'
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    addusers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.addusers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.addusers(response.data.items)
            })
    }

    render() {
        return <Users unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}/>
    }
}

type mapStateToPropsType = {

    users:UsersType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
export type mapDispatchToPropsType = {
    follow:(userId:string)=>void
    unfollow:(userId:string)=>void
    addusers:(users:UsersType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUserCount:(totalCount:number)=>void

}


let mapStateToProps = (state: AppStateType):mapStateToPropsType =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        addusers: (users: UsersType[]) => {
            dispatch(adduserAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
    }
}

    export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
