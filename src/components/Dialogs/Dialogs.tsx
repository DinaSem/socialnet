import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

function DialogItem(props:any){
    let path = '/dialogs/' + props.id;
return( <div className={s.dialog}>
    <NavLink to={path}>{props.name} </NavLink>
</div>)
}
function Message(props:any){
    return(<div className={s.message}>props.message</div>)
}

function Dialogs(props:any) {
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogsItems}>

                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Alex' id='2'/>
                <DialogItem name='Dina' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hello'/>
                <Message message='OK'/>
            </div>
        </div>

    )
}

export default Dialogs;