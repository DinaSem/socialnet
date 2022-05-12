import React from 'react';
import s from './Users.module.css'
import {follow, unfollow, UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleIsfollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}
export const Users = ({
                          currentPage,
                          onPageChanged,
                          totalUsersCount,
                          pageSize,
                          users,
                          followingInProgress
                      }: PropsType) => {

    return (
        <div className={s.wrapper}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={10} portionSize={10}/>
            <div>
                {users.map(u => {
                    return <User key={u.id}
                          user={u}
                          follow={follow}
                          unfollow={unfollow}
                          followingInProgress={followingInProgress}
                    />
                })
                }
            </div>
        </div>

    )

}