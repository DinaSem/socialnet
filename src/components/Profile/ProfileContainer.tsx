import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {
    getUserProfileThunk,
    getStatusThunk,
    updateStatusThunk
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamType = {
    userId: string

}
type PropsType = RouteComponentProps<PathParamType> & OnPropsType
type OnPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId)
    }

    render() {

        // @ts-ignore
        return (
            <Profile  {...this.props} profile={this.props.profile} status={this.props.status} />
        )
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

export type mapStateToPropsType = {
    profile: null
    status: string
}

export type mapDispatchToPropsType = {
    getUserProfileThunk: Function
    getStatusThunk: Function
    updateStatusThunk: Function
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})


let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)