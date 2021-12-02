import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import {DialogsContainerType} from "./DialogsContainer";
import {initialStateDialogsTypes} from "../../redux/dialogs-reducer";


type DialogsType = {
    dialogsPage: initialStateDialogsTypes
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}

function Dialogs(props: DialogsType) {


    let dialogsElements = props.dialogsPage.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessagesBody = props.dialogsPage.newMessageBody;
    const onSendMessageHandler = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (text: string) => {
        props.updateNewMessageBody(text)

    }
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessagesBody}
                                   placeholder={'Введите сообщение'}
                                   onChange={(e) => onNewMessageChange(e.currentTarget.value)}>

                    </textarea>
                    </div>
                    <div>
                        <button onClick={() => onSendMessageHandler()}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;