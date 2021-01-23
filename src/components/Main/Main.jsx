import React from 'react';
import Profile from './Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Main = (props) => {
    return(
        <div>
            <Profile profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Main;