import React from 'react';
import s from './Users.module.css'
import userPhoto from './user.png'
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {Paginator} from "./Paginator";

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
export const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}: PropsType) => {

    return (
        <div className={s.wrapper}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {users.map(m => <div key={m.id}>
       <span>
           <div className={s.imgwrapper}>
               <NavLink to={'/profile/' + m.id}>
                    <img className={s.ava} src={m.photos.small !== null ? m.photos.small : userPhoto} alt=""/>
               </NavLink>
           </div>
           <div>
               {m.followed
                   ? <button disabled={props.followingInProgress.some(id => id === m.id)}
                             onClick={() => {
                                 props.unfollow(m.id)
                             }}
                   >Unfollow</button>
                   : <button disabled={props.followingInProgress.some(id => id === m.id)}
                             onClick={() => {
                                 props.follow(m.id)
                             }}
                   >Follow</button>}
           </div>
       </span>
                    <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                            </span>

                    <span>
                            <div>{'m.location.country'}</div>
                            <div>{'m.location.city'}</div>
                        </span>
                </div>
            )}
        </div>

    )

}