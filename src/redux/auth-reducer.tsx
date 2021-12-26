const SET_USER_DATA = 'SET_USER_DATA'

export type initialUsersStateTypes = {
    userid:number
    email: string
    login: string
    isAuth:boolean
}
let initialState: initialUsersStateTypes = {
    userid: 1,
    email: '',
    login: 'free',
    isAuth:false

}

export const authReducer = (state = initialState, action: GeneralType): initialUsersStateTypes => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data,isAuth:true}

        default:
            return state;
    }
}

export type GeneralType =setUserDataACType

export  type setUserDataACType = ReturnType<typeof setUserDataAC>


export const setUserDataAC = (userid:number, email: string,login: string) => {
    return {
        type: SET_USER_DATA, data: {userid, email,login}
    } as const
}


export default authReducer;
