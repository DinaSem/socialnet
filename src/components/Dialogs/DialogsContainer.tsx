import React from 'react';
import {initialStateDialogsTypes, sensMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux'
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type DialogsType = {
    //dialogsPage: DialogsPageType
    //dispatch: (action: ActionsType) => void
    //onSendMessageHandler:()=>void
//updateNewMessageBody:()=>void
//sendMessage:()=>void
    //store: storeType
    //state:RootStateType
}
/*
function DialogsContainer(props: DialogsType) {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage

                const onSendMessageHandler = () => {
                    store.dispatch(sensMessageCreator())
                }
                const onNewMessageChange = (body: string) => {
                    let action = updateNewMessageBodyCreator(body)
                    store.dispatch(action);
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageHandler}
                                dialogsPage={state}/>
            }}

    </StoreContext.Consumer>
}*/

type mapStateToPropsTypes = {
    dialogsPage: initialStateDialogsTypes
    isAuth:boolean
}
export type mapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
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
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage: () => {
            dispatch(sensMessageCreator())
        }
    }
}
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer;