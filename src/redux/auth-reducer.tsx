import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

export type initialUsersStateTypes = {
    userid: number
    email: string
    login: string
    isAuth: boolean
}
let initialState: initialUsersStateTypes = {
    userid: 1,
    email: '',
    login: 'free',
    isAuth: false

}

export const authReducer = (state = initialState, action: GeneralAuthType): initialUsersStateTypes => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}

        default:
            return state;
    }
}

export type GeneralAuthType = setUserDataACType

export  type setUserDataACType = ReturnType<typeof setUserDataAC>


export const setUserDataAC = (userid: number, email: string, login: string, isAuth:boolean) => {
    return {
        type: SET_USER_DATA, payload: {userid, email, login, isAuth}
    } as const
}
export const getAuthUserData = () => async (dispatch: Dispatch<GeneralAuthType>) => {
    let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login, true))
            }
}
export const login = (email:string, password:string, rememberMe:boolean) =>
    async(dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }else {
               let message=  response.data.messages.length>0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error:'Email is wrong'}))
            }
}
export const logout = () => async(dispatch: Dispatch<GeneralAuthType>) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(1, '', 'free', false ))
            }
}


export default authReducer;
