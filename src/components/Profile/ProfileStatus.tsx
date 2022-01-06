import s from "./ProfileInfo.module.css";
import React, {useState} from "react";


type PropsType = {
    status:string
}
function ProfileStatus (props:PropsType){

    let[mode,setMode]=useState(true)
  let activateEditMode =()=>{
       setMode (false)

   }
       return(
           <div>
               {mode &&
               <div>
                   <span onDoubleClick={activateEditMode}>{props.status}</span>
               </div>
               }
               {!mode &&
               <div>
                   <input autoFocus={true} onBlur={activateEditMode} value={props.status}/>
               </div>
               }
           </div>
       )

}
export default ProfileStatus;