import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {
    getUserProfileThunk,
    getStatusThunk,
    updateStatusThunk, savePhotoThunk, ProfileDataType
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamType = {
    userId: number
}
// @ts-ignore
type PropsType = RouteComponentProps<PathParamType> & OnPropsType
type OnPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    //Вспомогательный метод чтобы не дублировать код
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUsersId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate() {
        if (this.props.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (

            <Profile isOwner={!this.props.match.params.userId} {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     savePhotoThunk={this.props.savePhotoThunk}/>
        )
    }
}

//let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

export type mapStateToPropsType = {
    profile: null | ProfileDataType
    status: string
    authorizedUsersId: number
    isAuthUser: boolean
}

export type mapDispatchToPropsType = {
    getUserProfileThunk: Function
    getStatusThunk: Function
    updateStatusThunk: Function
    savePhotoThunk:Function

}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUsersId: state.auth.userid,
    isAuthUser: state.auth.isAuth
})


//let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)