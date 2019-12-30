import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
                <div className={s.container}>
                        <div className={s.image}></div>
                        <div className={s.post}>
                        <p className={s.txt}>{ props.message }</p>
                    </div>
                </div>
    );
}

export default Post;