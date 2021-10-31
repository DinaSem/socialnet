import s from "./ProfileInfo.module.css";
import React from "react";

function ProfileInfo(props:any){
    return(
        <div>
            <div className={s.content}>
                <img src="https://cdn3.wealthyaffiliate.com/uploads/1474011/blog/6d8136d9fa56ca229177145d47ffcc6b1541191250_1541194597_cropped.jpg" alt=""/>
            </div>
            <div className={s.dicription}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;