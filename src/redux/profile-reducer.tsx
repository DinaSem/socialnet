import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string

}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'Как же круто', likesCount: 22},
        {id: 3, message: 'Уря-уря', likesCount: 30},
    ],
    profile: null,
    status: ''
}
export type initialStateTypes = typeof initialState

const profileReducer = (state: initialStateTypes = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 4,
                message: action.newPostText,
                likesCount: 37
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}
export type ActionsType =
    AddPostActionType
    | setUserProfileType
    | setStatusType
    | savePhotoSiccessType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>
export type savePhotoSiccessType = ReturnType<typeof savePhotoSuccess>


export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}

export const setUserProfile = (profile: null) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}
export const savePhotoSuccess = (photos: any) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    } as const
}
export const getUserProfileThunk = (userId: number) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS, status
    } as const
}
export const getStatusThunk = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatusThunk = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export const savePhotoThunk = (file: any) => (dispatch: Dispatch) => {
    debugger
    profileAPI.updateProfilePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
        })
}

export default profileReducer;
