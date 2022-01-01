import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & OnPropsType
type OnPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
                if(!userId){
                    userId='2';
                }
                this.props.getUserProfileThunk(userId)
/*                userAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })*/
    }

    render() {
        if (!this.props.isAuth)return  <Redirect to={'/login'}/>
        return (
            <Profile  {...this.props} profile={this.props.profile}/>
        )
    }
}

export type mapStateToPropsType = {
    profile: null
    isAuth:boolean
}

export type mapDispatchToPropsType = {
    getUserProfileThunk: Function
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfileThunk})(withUrlDataContainerComponent);