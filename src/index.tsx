import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import store, {RootStateType, storeType} from "./redux/state";




let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={state} dispatch={store.dispatch.bind(store)} newPostText={store._state.profilePage.newPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
