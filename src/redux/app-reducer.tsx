import {Dispatch} from "redux";
import {GeneralAuthType, getAuthUserData} from "./auth-reducer";

const SET_INICIALAZED = 'SET_INICIALAZED'

export type initialUsersStateTypes = {
    initialized: boolean,

}
let initialState: initialUsersStateTypes = {
    initialized: false,

}

export const appReducer = (state = initialState, action: GeneralType): initialUsersStateTypes => {
    switch (action.type) {
        case SET_INICIALAZED:
            return {...state, initialized: true}

        default:
            return state;
    }
}

export type GeneralType = setInicializedACACType|GeneralAuthType

export  type setInicializedACACType = ReturnType<typeof setInicializedAC>


export const setInicializedAC = (initialized:boolean) => {
    return {
        type: SET_INICIALAZED, initialized
    } as const
}
export const InicializeApp = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
            dispatch(setInicializedAC(false))
        })
    }

export default appReducer;
