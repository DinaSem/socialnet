import React from 'react';
import s from './../Dialogs.module.css'

type MessageTypes = {
    message: string
}

function Message(props: MessageTypes) {
    return (<div className={s.message}>{props.message}</div>)
}

export default Message;