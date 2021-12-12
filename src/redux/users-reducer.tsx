const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const ADD_USER = 'ADD_USER'


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
}


let initialState: initialUsersStateTypes = {
    users: []
}

export const usersReducer = (state = initialState, action: GeneralType):initialUsersStateTypes => {
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

export default usersReducer;
