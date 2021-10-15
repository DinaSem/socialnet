import React from 'react';
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.content}>
            <img src="https://wallpaperset.com/w/full/f/3/3/476097.jpg" alt=""/>
            <div>
                ava+description
            </div>
            <div>
                My Posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;