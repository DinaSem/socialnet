const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const ADD_USER = 'ADD_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
    isFetching: boolean
}


let initialState: initialUsersStateTypes = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initialState, action: GeneralType): initialUsersStateTypes => {
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export type GeneralType =
    followACType
    | unfollowACType
    | adduserType
    | setCurrentPageType
    | setTotalUserCountACType
    | toggleIsFetchingACType
export  type followACType = ReturnType<typeof follow>
export type unfollowACType = ReturnType<typeof unfollow>
export type adduserType = ReturnType<typeof addusers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export const follow = (userId: string) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollow = (userId: string) => {
    return {
        type: UNFOLLOW, userId
    } as const
}
export const addusers = (users: UsersType[]) => {
    return {
        type: ADD_USER, users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}
export const setTotalUserCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    } as const
}

export default usersReducer;
