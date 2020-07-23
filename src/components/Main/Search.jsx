import React from 'react';
import styl from './Search.module.css';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../redux/state';

const Search = (props) => {

    const refer = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onTextChange = () => {
        let text = refer.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
        <div className={styl.search}>
            <textarea onChange={ onTextChange } ref={ refer } className={styl.input} 
                value={props.newPostData} placeholder="Find Post"></textarea>
            <button onClick={ addPost } className={styl.btn}>Search</button>
        </div>
    );
}

export default Search;