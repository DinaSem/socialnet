import React from 'react';
import s from './Users.module.css'
import userPhoto from './user.png'
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';

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
export const Users = (props: PropsType) => {

    let pageCount = props.totalUsersCount / props.pageSize

    let pages = []
    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.wrapper}>
            <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>

            {props.users.map(m => <div key={m.id}>
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