import React from 'react';
import {initialStateDialogsTypes, sensMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux'


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
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
export type DialogsContainerType = mapStateToPropsTypes & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsTypes => {
    return {
        dialogsPage: state.dialogsPage
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

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;