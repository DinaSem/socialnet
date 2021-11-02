import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

type AppTypes= {
    component: any
    path: string
}

function App(props:any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar to={''}/>
                <div className='app-wrapper-content'>
                    <Route  path = '/profile' component={Profile}/>
                    <Route  path = '/dialogs' component={Dialogs}/>

                </div>
            </div>
        </BrowserRouter>);
}

export default App;
