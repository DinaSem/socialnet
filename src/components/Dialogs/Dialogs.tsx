import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import {initialStateDialogsTypes} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {reduxForm, Field} from "redux-form";


type DialogsType = {
    dialogsPage: initialStateDialogsTypes
    sendMessage: (values:string) => void
    updateNewMessageBody: (text: string) => void
    isAuth:boolean
    newMessageBody:string
}

export function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessagesBody = props.newMessageBody;
    let addNewMessage=(values:any)=>{// ИЗМЕНИТЬ
props.sendMessage(values.newMessagesBody)
    }

//if (!props.isAuth)return  <Redirect to={'/login'}/>


    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><AddMessageFormRedux onSubmit={addNewMessage} /></div>
            </div>
        </div>
    )
}
const AddMessageForm = (props:any)=>{// ИЗМЕНИТЬ
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component ='textarea' name='newMessagesBody' placeholder='Enter your message'/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;