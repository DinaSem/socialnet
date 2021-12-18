const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const ADD_USER = 'ADD_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type UsersType = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null

    }
    status: string | null
    followed: boolean

}
export type LocationType = {
    city: string,
    country: string
}

export type initialUsersStateTypes = {
    users: UsersType[];
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


let initialState: initialUsersStateTypes = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1
}

export const usersReducer = (state = initialState, action: GeneralType):initialUsersStateTypes => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)}
        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)}
        case ADD_USER:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        default:
            return state;
    }
}

export type GeneralType = followACType | unfollowACType | adduserType|setCurrentPageType|setTotalUserCountACType
export  type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type adduserType = ReturnType<typeof adduserAC>
export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCountAC>

export const followAC = (userId: string) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW, userId
    } as const
}
export const adduserAC = (users: UsersType[]) => {
    return {
        type: ADD_USER, users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}
export const setTotalUserCountAC = (totalUsersCount:number) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count:totalUsersCount
    } as const
}

export default usersReducer;
