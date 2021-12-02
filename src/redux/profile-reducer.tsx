import store, {ActionsType} from "./store";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
      newPostText: ''
    }
export type initialStateTypes = typeof initialState

const profileReducer = (state: initialStateTypes = initialState, action: ActionsType):initialStateTypes => {
  if (action.type === ADD_POST) {
    let newPost: PostsType = {
      id: 4,
      message: state.newPostText,
      likesCount: 37
    }
    state.posts.push(newPost)
    state.newPostText = '';
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
}
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
export default profileReducer;
/*
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type storeType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsType) => void
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
export type sensMessageCreatorType = ReturnType<typeof sensMessageCreator>
export type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextType
    | sensMessageCreatorType
    | updateNewMessageBodyCreatorType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'Как же круто', likesCount: 22},
                {id: 3, message: 'Уря-уря', likesCount: 30},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageBody: '',
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer//паттерн для "подписки" на событие
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 37
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            debugger
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = {
                id: 4,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(body)
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state)
        }
    }
}

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
export const sensMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}


export default store;



*/
