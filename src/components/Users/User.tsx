import React from 'react';
import s from './Users.module.css'
import userPhoto from './user.png'
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';

export type PropsType = {
    user: UsersType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}
export const User = ({user,followingInProgress,unfollow,follow}: PropsType) => {

    return (
        <div>
        <span>
           <div className={s.imgwrapper}>
               <NavLink to={'/profile/' + user.id}>
                    <img className={s.ava} src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""/>
               </NavLink>
           </div>
           <div>
               {user.followed
                   ? <button disabled={followingInProgress.some(id => id === user.id)}
                             onClick={() => {
                                 unfollow(user.id)
                             }}
                   >Unfollow</button>
                   : <button disabled={followingInProgress.some(id => id === user.id)}
                             onClick={() => {
                                 follow(user.id)
                             }}
                   >Follow</button>}
           </div>
       </span>
    <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            </span>

    <span>
                            <div>{'m.location.country'}</div>
                            <div>{'m.location.city'}</div>
                        </span>
        </div>
)

}