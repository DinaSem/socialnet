import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type PropsType = {
    // userid:number
    // email: string
    login: string
    //setUserDataAC:(userid:number,email: string,Login: string)=>void
    getAuthUserData:Function
    isAuth:boolean
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header   {...this.props}/>
    }
}
    export type mapStateToPropsType = {
    isAuth:boolean,
    login: string
}
    export type mapDispatchToPropsType = {
        //setUserDataAC: (userid:number, email: string,Login: string) => void
        getAuthUserData:Function
}
export const mapStateToProps = (state:AppStateType):mapStateToPropsType=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);