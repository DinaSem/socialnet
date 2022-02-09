import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type PropsType = {
    // userid:number
    // email: string
    login: string
    logout:any
    isAuth:boolean
}

class HeaderContainer extends React.Component<PropsType> {


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
export default connect(mapStateToProps,{logout})(HeaderContainer);