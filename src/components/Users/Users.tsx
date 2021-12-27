import React from 'react';
import s from './Users.module.css'
import userPhoto from './user.png'
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {UsersContainerType} from "./UsersContainer";

export type PropsType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleIsfollowingProgress: (isFetching: boolean,userId: string) => void
    followingInProgress:Array<string>
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
                   ? <button disabled={props.followingInProgress.some(id=>id===m.id)} onClick={() => {
                       props.toggleIsfollowingProgress(true,m.id)
                       axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,{
                           withCredentials: true,
                           headers: {'API-KEY':'82fa877f-d7f6-43f6-aa9e-879e893eebb4'}
                       })
                           .then(response => {
                               if(response.data.resultCode===0) {
                                   props.unfollow(m.id)
                               }
                               props.toggleIsfollowingProgress(false,m.id)
                           })

                       console.log('unfollow')
                   }}>Unfollow</button>
               : <button disabled={props.followingInProgress.some(id=>id===m.id)} onClick={() => {
                       props.toggleIsfollowingProgress(true,m.id)
                       axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,{},{
                           withCredentials: true,
                           headers: {'API-KEY':'82fa877f-d7f6-43f6-aa9e-879e893eebb4'}
                       })
                           .then(response => {
                               if(response.data.resultCode===0) {
                                   props.follow(m.id)
                               }
                               props.toggleIsfollowingProgress(false,m.id)
                           })
                       console.log('follow')
                   }}>Follow</button>}


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