
import React, {ChangeEvent, useEffect, useState} from "react";


type PropsType = {
    status:string
    updateStatusThunk:Function

}
export const ProfileStatusWithHooks =(props:PropsType)=> {
const [editMode, setEditMode]= useState(false)
    const [status, setStatus]= useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    // state = {
    //     editMode: true,
    //     status:this.props.status
    // }
    // activateEditMode = ()=>{
    //     this.setState({
    //         editMode: true
    //     })
    // }
    // deactivateEditMode = ()=>{
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateStatusThunk(this.state.status)
    // }
    // onStatusChange(e: ChangeEvent<HTMLInputElement>){// ПОМЕНЯТЬ!!!
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // }
    // componentDidUpdate(prevProps:any, prevState:any) {
    //
    //         if(prevProps.status !==this.props.status){
    //             this.setState({
    //                 status: this.props.status
    //             })
    //      }
    //  }
    //
    // render() {
    const activateEditMode = ()=>{
        setEditMode(true)
    }
    const deActivateEditMode = ()=>{
        setEditMode(false)
        props.updateStatusThunk(status)
    }
   const onStatusChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }



    return (
        <div>
            {!editMode &&
            <div>
               <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                     autoFocus={true} onBlur={deActivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )

}
export default ProfileStatusWithHooks;