import React from 'react';
import Header from "./Header";
import axios from "axios";
import { connect } from 'react-redux';
import {setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type PropsType = {
    // userid:number
    // email: string
    login: string
    setUserDataAC:(userid:number,email: string,login: string)=>void
    isAuth:boolean
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserDataAC(id, email, login)
                }
            });
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
        setUserDataAC: (userid:number, email: string,login: string) => void
}
export const mapStateToProps = (state:AppStateType):mapStateToPropsType=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
export default connect(mapStateToProps,{setUserDataAC})(HeaderContainer);