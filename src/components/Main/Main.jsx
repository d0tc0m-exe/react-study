import React from 'react';
import Profile from './Profile';
import Search from './Search';
import Post from './Post';

const Main = (props) => {

    let posts = props.state.postData.map(p => <Post id={p.id} message={p.message} title={p.title} />);

    return(
        <div>
            <Profile />
            <Search />
            { posts }
        </div>
    );
}

export default Main;