import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))


export default store