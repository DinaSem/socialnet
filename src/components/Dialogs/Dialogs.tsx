import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemTypes = {
    id: string
    name: string
}
type MessageTypes = {
    message: string
}
type DialogsTypes = {
    id: string
    name: string

}

function DialogItem(props: DialogItemTypes) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>)
}

function Message(props: MessageTypes) {
    return (<div className={s.message}>props.message</div>)
}

function Dialogs(props: DialogsTypes) {
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