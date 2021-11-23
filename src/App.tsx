import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsType, storeType,} from "./redux/state";


type AppTypes = {
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    store: storeType
    dispatch: (action: ActionsType) => void
}

function App(props: AppTypes) {

    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar to={''}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsPage={state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path='/profile'
                           render={() => <Profile dispatch={props.dispatch}
                                                  profilePage={state.profilePage}
                                                  newPostText={props.newPostText}/>}/>

                </div>
            </div>
        </BrowserRouter>);
}

export default App;
