import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


export default store