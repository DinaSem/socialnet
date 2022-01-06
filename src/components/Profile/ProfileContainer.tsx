import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

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
    }

    render() {

        return (
            <Profile  {...this.props} profile={this.props.profile}/>
        )
    }
}
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

export type mapStateToPropsType = {
    profile: null
}

export type mapDispatchToPropsType = {
    getUserProfileThunk: Function
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,

})


let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfileThunk})(withUrlDataContainerComponent);