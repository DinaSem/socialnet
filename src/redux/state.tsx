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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type storeType={
    _state:RootStateType
    getState:()=>RootStateType
    _callSubscriber:(state:RootStateType)=>void
    subscribe:(observer:(state:RootStateType)=>void)=>void
    dispatch:(action:ActionsType)=>void
}

export type AddPostActionType={
    type:'ADD-POST'
}
export type UpdateNewPostTextType={
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
}
export type ActionsType = AddPostActionType|UpdateNewPostTextType

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'Как же круто', likesCount: 22},
                {id: 3, message: 'Уря-уря', likesCount: 30},
            ],
            newPostText: 'it.camasutra.com'
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
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
/*    addPost() {
        let newPost: PostsType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 37
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },*/
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 37
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            console.log(this._state)
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}


/*let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'Как же круто', likesCount: 22},
            {id: 3, message: 'Уря-уря', likesCount: 30},
        ],
        newPostText: 'it.camasutra.com'
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
        ]
    }
}*/


export default store;



