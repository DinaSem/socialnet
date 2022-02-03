
const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'OK'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Dina'},
    ],
}

export type initialStateDialogsTypes = typeof initialState


const dialogsReducer = (state: initialStateDialogsTypes = initialState, action: GeneralType) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages,{id:4,message: body}],
                dialogs: [...state.dialogs,{id:4,name: 'Irina'}],
            }
        }
        default:return state;
    }
}
type GeneralType = sensMessageCreatorType
type sensMessageCreatorType = ReturnType<typeof sensMessageCreator>


export const sensMessageCreator = (newMessageBody:string) => {
    return {
        type: SEND_MESSAGE,newMessageBody
    } as const
}
export default dialogsReducer;

