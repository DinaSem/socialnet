import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
}

function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="Аватарка"/>
            {props.message}
            <div><span>like</span> {props.likesCount}</div>

        </div>
    )
}

export default Post;