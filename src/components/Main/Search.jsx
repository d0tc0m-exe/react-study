import React from 'react';
import styl from './Search.module.css';

const Search = (props) => {

    const refer = React.createRef();

    let addPost = () => {
        props.dispatch({ type: "ADD-POST" });
    }

    let onTextChange = () => {
        let text = refer.current.value;
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
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