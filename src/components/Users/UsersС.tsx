import React from 'react';
import axios from 'axios'
import {UsersType} from "../../redux/users-reducer"
import userPhoto from './user.png'
import s from './Users.module.css'


type PropsType = {
    users:Array<UsersType>
    follow:(userId:string)=>void
    unfollow:(userId:string)=>void
    addusers:(users:UsersType[])=>void
}

class UsersC extends React.Component<PropsType>{

componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            this.props.addusers(response.data.items)
        })
}

render(){
    return (
        <div className={s.wrapper}>

            {this.props.users.map(m => <div key={m.id}>
       <span>
           <div className={s.imgwrapper}>
               <img className={s.ava} src={m.photos.small !== null ? m.photos.small : userPhoto} alt=""/>
           </div>
           <div>
               {m.followed
                   ? <button onClick={()=>{this.props.unfollow(m.id)}}>Follow</button>
                   : <button onClick={()=>{this.props.follow(m.id)}}>Unfollow</button>}

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
}
export default UsersC