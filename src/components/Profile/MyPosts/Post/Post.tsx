import React from 'react';
import s from './Post.module.css'

function Post() {
    return (
        <div className={s.item}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="Аватарка"/>
            post1
        </div>
    )
}

export default Post;