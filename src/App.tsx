import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {InicializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";

export type PropsType = {
    InicializeApp:Function
    inicialized:boolean

}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.InicializeApp();
    }
    render() {
        // if(!this.props.inicialized){
        //     return <Preloader/>
        // }  ВРЕМЕННО отключила- зависает

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar to={''}/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>);
    }
}
export type mapStateToPropsType = {
    initialized:boolean
}

const mapStateToProps = (state:AppStateType) => ({
    initialized:state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,{InicializeApp}))(App);

