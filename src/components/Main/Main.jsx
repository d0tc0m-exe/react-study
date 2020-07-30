import React from 'react';
import Profile from './Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Main = (props) => {
    debugger
    return(
        <div>
            <Profile />
            <MyPostsContainer />
        </div>
    );
}

export default Main;