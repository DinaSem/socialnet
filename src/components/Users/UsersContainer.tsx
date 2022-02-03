import React from 'react';
import {connect} from 'react-redux';
import {Users} from "./Users";
import {
    followSucsess, getUsersThunkCreator,
    setCurrentPage, toggleIsfollowingProgress,
    unfollowSucsess,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "./Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsfollowingProgress: (isFetching: boolean, userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsersThunkCreator:Function
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);
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
    followingInProgress: Array<number>
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    addusers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsfollowingProgress: (isFetching: boolean, userId: number) => void
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
