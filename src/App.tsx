import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import store, {ActionsType, storeType,} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppTypes = {
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    //newPostText: string
    //store: storeType
   //dispatch: (action: ActionsType) => void
}

function App(props: AppTypes) {

/*    const state = props.store.getState();*/

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar to={''}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile'
                           render={() => <Profile/>}/>

                </div>
            </div>
        </BrowserRouter>);
}

export default App;
