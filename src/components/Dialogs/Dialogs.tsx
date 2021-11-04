import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import state, {DialogsPageType} from "../../redux/state";



type DialogsType ={
    dialogsPage:DialogsPageType
}

    function Dialogs(props: DialogsType) {


    let dialogsElements = props.dialogsPage.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;