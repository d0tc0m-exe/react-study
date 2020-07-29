import React from 'react';
import Profile from './Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Main = (props) => {
    debugger
    return(
        <div>
            <Profile />
            <MyPostsContainer store={props.store} dispatch={props.dispatch} />
        </div>
    );
}

export default Main;