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
export type ProfilePageType={
    posts:Array<PostsType>

}
export type DialogsPageType={
    messages:Array<MessagesType>
    dialogs:Array<DialogsType>
}
export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType

}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'Как же круто', likesCount: 22},
            {id: 3, message: 'Уря-уря', likesCount: 30},
        ]
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

}
export default state;



