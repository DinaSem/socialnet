import React from 'react';
import usersReducer, {initialUsersStateTypes, UsersType} from "../../redux/users-reducer";
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";



export const Users = (props: UsersContainerType) => {

    return (
        <div className={s.wrapper}>
            {props.users.map(m => <div key={m.id}>
       <span>
           <div className={s.imgwrapper}>
               <img className={s.ava} src={m.photoUrl} alt=""/>
           </div>
           <div>
               {m.followed
                   ? <button onClick={()=>{props.unfollow(m.id)}}>Follow</button>
                   : <button onClick={()=>{props.follow(m.id)}}>Unfollow</button>}

           </div>
       </span>
                    <span>
                            <div>{m.fullname}</div>
                            <div>{m.status}</div>
                            </span>

                    <span>
                            <div>{m.location.country}</div>
                            <div>{m.location.city}</div>
                        </span>
                </div>
            )}
        </div>
    )
}