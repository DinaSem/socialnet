import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import {initialStateDialogsTypes} from "../../redux/dialogs-reducer";
import {reduxForm, Field} from "redux-form";
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControl/FormsControls";


type DialogsType = {
    dialogsPage: initialStateDialogsTypes
    sendMessage: (values: string) => void
    updateNewMessageBody: (text: string) => void
    isAuth: boolean
    newMessageBody: string
}

export function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let addNewMessage = (values: { newMessagesBody: string }) => {// ИЗМЕНИТЬ
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
                <div><AddMessageFormRedux onSubmit={addNewMessage}/></div>
            </div>
        </div>
    )
}
const maxLenght20 = maxLenghtCreator(20)
const AddMessageForm = (props: any) => {// ИЗМЕНИТЬ
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessagesBody' placeholder='Enter your message'
                       validate={[required, maxLenght20]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux: any = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;