import React from 'react';
import s from '../../../static/css/Main/Search.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElements =
        props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}> 
            <div className={s.input}>
                <div>
                    <textarea className={s.textarea} onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button className={s.btn} onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;