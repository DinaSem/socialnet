import React from 'react';
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import axios from 'axios'
import userPhoto from './user.png'
import {UsersType} from "../../redux/users-reducer";

export type PropsType={
    users:Array<UsersType>
    follow:(userId:string)=>void
    unfollow:(userId:string)=>void
    pageSize:number
    totalUsersCount:number
    currentPage:number
    onPageChanged:(pageNumber: number)=>void
}
export const Users = (props:PropsType)=>{

    let pageCount = props.totalUsersCount/props.pageSize

    let pages = []
    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }
    return(
        <div className={s.wrapper}>
            <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e)=>
                    {props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {props.users.map(m => <div key={m.id}>
       <span>
           <div className={s.imgwrapper}>
               <img className={s.ava} src={m.photos.small !== null ? m.photos.small : userPhoto} alt=""/>
           </div>
           <div>
               {m.followed
                   ? <button onClick={()=>{props.unfollow(m.id)}}>Follow</button>
                   : <button onClick={()=>{props.follow(m.id)}}>Unfollow</button>}

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