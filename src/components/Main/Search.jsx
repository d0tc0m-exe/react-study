import React from 'react';
import styl from './Search.module.css';


const refer = React.createRef();

let addPost = () => {
    let text = refer.current.value;
    alert(text);
}

const Search = () => {
    return(
        <div className={styl.search}>
            <input ref={ refer } className={styl.input} type="text" placeholder="Find Post"></input>
            <button onClick={ addPost } className={styl.btn}>Search</button>
        </div>
    );
}

export default Search;