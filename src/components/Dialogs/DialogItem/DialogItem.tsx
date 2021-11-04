import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

type DialogItemTypes = {
    id: number
    name: string
}

function DialogItem(props: DialogItemTypes) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>)
}

export default DialogItem;