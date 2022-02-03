import React from 'react';
import {initialStateDialogsTypes, sensMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux'
//import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type mapStateToPropsTypes = {
    dialogsPage: initialStateDialogsTypes
    isAuth:boolean
}
export type mapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: (newMessageBody:string) => void

}
export type DialogsContainerType = mapStateToPropsTypes & mapDispatchToPropsType

export const mapStateToProps = (state: AppStateType): mapStateToPropsTypes => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sensMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)