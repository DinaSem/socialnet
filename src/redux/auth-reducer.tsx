import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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

export const authReducer = (state = initialState, action: GeneralType): initialUsersStateTypes => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}

        default:
            return state;
    }
}

export type GeneralType = setUserDataACType

export  type setUserDataACType = ReturnType<typeof setUserDataAC>


export const setUserDataAC = (userid: number, email: string, login: string, isAuth:boolean) => {
    return {
        type: SET_USER_DATA, payload: {userid, email, login, isAuth}
    } as const
}
export const getAuthUserData = () => (dispatch: Dispatch<GeneralType>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login, true))
            }
        });
}
export const login = (email:string, password:string, rememberMe:boolean) =>
    (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}
export const logout = () => (dispatch: Dispatch<GeneralType>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(1, '', 'free', false ))
            }
        });
}


export default authReducer;
