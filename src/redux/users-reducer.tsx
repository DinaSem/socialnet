const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const ADD_USER = 'ADD_USER'


export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullname: string
    status: string
    location: LocationType
}
export type LocationType = {
    city: string,
    country: string
}


let initialState = {
    users: [
        {id: 1, photoUrl: 'https://a.deviantart.net/avatars/a/e/aemmy.png?4', followed: true, fullname: 'Dina', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        {
            id: 2,
            photoUrl: 'https://a.deviantart.net/avatars/a/e/aemmy.png?4',
            followed: false,
            fullname: 'Dmitry',
            status: 'React guru',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://a.deviantart.net/avatars/a/e/aemmy.png?4',
            followed: true,
            fullname: 'Alex',
            status: 'I like beer',
            location: {city: 'Berlin', country: 'Germany'}
        },
    ],
    newPostText: ''
}
export type initialUsersStateTypes = typeof initialState

export const usersReducer = (state: initialUsersStateTypes = initialState, action: GeneralType):initialUsersStateTypes => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)}
        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)}
        case ADD_USER:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export type GeneralType = followACType | unfollowACType | adduserType
export  type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type adduserType = ReturnType<typeof adduserAC>

export const followAC = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}
export const adduserAC = (users: UsersType[]) => {
    return {
        type: ADD_USER, users
    } as const
}

export default usersReducer;
