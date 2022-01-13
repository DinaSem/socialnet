import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
    newPostText: '',
    profile: null,
    status:''
}
export type initialStateTypes = typeof initialState

const profileReducer = (state: initialStateTypes = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 4,
                message: state.newPostText,
                likesCount: 37
            }
            let newstate = {...state};
            state.posts = [...state.posts];
            newstate.posts.push(newPost);
            newstate.newPostText = '';
            return newstate;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextType | setUserProfileType |setStatusType
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile:null) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}
export const getUserProfileThunk = (userId:string)=>(dispatch:Dispatch)=>{
userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const setStatus = (status:string)=>{
    return {
        type: SET_STATUS, status
    } as const
}
export const getStatusThunk = (userId:string)=>(dispatch:Dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatusThunk = (status:string)=>(dispatch:Dispatch)=>{
    profileAPI.getStatus(status)
        .then(response => {
            if(response.data.resultCode===0){
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;
