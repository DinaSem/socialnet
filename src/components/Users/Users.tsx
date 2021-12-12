import React from 'react';
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import axios from 'axios'
import userPhoto from './user.png'


export const Users = (props: UsersContainerType) => {
if(props.users.length===0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
        props.addusers(response.data.items)
    })

}
    return (
        <div className={s.wrapper}>
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