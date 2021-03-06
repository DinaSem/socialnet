import {userAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const ADD_USER = 'ADD_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean

}

export type initialUsersStateTypes = {
    users: UsersType[];
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type PhotosType = {
    small?: null | string
    large?: null | string
}

export type UserType = {
    name: string
    id: number
    photos?: PhotosType
    status: null | string
    followed: boolean
}
export type ProfileUserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

let initialState: initialUsersStateTypes = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
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
    | toggleIsfollowingProgressType
export  type followACType = ReturnType<typeof followSucsess>
export type unfollowACType = ReturnType<typeof unfollowSucsess>
export type adduserType = ReturnType<typeof addusers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleIsfollowingProgressType = ReturnType<typeof toggleIsfollowingProgress>

export const followSucsess = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowSucsess = (userId: number) => {
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
export const toggleIsfollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        // @ts-ignore
        dispatch(addusers(data.items))
        dispatch(setTotalUserCount(data.totalCount))

    }
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsfollowingProgress(true, userId))
        let response = await userAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSucsess(userId))
        }
        dispatch(toggleIsfollowingProgress(false, userId))
    }
}

export const unfollow = (userId: number) => {
    return async(dispatch: Dispatch) => {
        dispatch(toggleIsfollowingProgress(true, userId))
        let response = await userAPI.unfollow(userId)
                            if (response.data.resultCode === 0) {
                    dispatch(unfollowSucsess(userId))
                }
                dispatch(toggleIsfollowingProgress(false, userId))
    }
}

export default usersReducer;
