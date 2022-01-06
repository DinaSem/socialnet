import React from 'react';
import {connect} from 'react-redux';
import {Users} from "./Users";

import {
    addusers,
    followSucsess, getUsersThunkCreator,
    setCurrentPage, setTotalUserCount, toggleIsFetching, toggleIsfollowingProgress,
    unfollowSucsess,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "./Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsfollowingProgress: (isFetching: boolean, userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    getUsersThunkCreator:Function
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
/*        this.props.toggleIsFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.addusers(data.items)
            this.props.setTotalUserCount(data.totalCount)
        });*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);
/*        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.addusers(data.items)
        })*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   toggleIsfollowingProgress={this.props.toggleIsfollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

type mapStateToPropsType = {

    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    addusers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsfollowingProgress: (isFetching: boolean, userId: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: followSucsess, unfollow: unfollowSucsess, setCurrentPage, toggleIsfollowingProgress, getUsersThunkCreator
    }),
    WithAuthRedirect,
)(UsersContainer)
