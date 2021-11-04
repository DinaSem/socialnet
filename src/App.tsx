import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import state, {
    DialogsType,
    MessagesType,
    PostsType, RootStateType,

} from "./redux/state";


type AppTypes = {
    state:RootStateType
}

function App(props: AppTypes) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar to={''}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>);
}

export default App;
