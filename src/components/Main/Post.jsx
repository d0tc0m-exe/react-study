import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
                <div className={s.container}>
                        <div className={s.image}></div>
                        <div className={s.post}>
                        <h4 className={s.title}>{ props.title }</h4>
                        <small><p className={s.txt}>{ props.message }</p></small>
                    </div>
                </div>
    );
}

export default Post;