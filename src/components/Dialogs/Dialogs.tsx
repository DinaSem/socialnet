import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import state, {ActionsType, DialogsPageType} from "../../redux/state";
import { sensMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


type DialogsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsType) {


    let dialogsElements = props.dialogsPage.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessagesBody = props.dialogsPage.newMessageBody;
    const onSendMessageHandler = () => {
        props.dispatch(sensMessageCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        let action = updateNewMessageBodyCreator(body)
        props.dispatch(action);
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
                                   onChange={onNewMessageChange}>

                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;