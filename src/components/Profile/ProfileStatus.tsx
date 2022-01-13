import s from "./ProfileInfo.module.css";
import React, {ChangeEventHandler} from "react";


type PropsType = {
    status:string
    updateStatusThunk:Function
}
class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status:this.props.status
    }
    activateEditMode = ()=>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = ()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }
    onStatusChange = (e:any)=>{// ПОМЕНЯТЬ!!!
        this.setState({
            status:e.currentTarget.value
        })
    }

render() {
    return (
        <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{!this.props.status || '---'}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                       value={this.state.status}/>
            </div>
            }
        </div>
    )
}
}
export default ProfileStatus;