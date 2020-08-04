import React from 'react';
import user from '../../../static/css/Users/User.module.css';

const User = (props) => {
    return (
        <div className={user.wrapper}>
            <div className={user.block}>
                <div className={user.profilePhoto}></div>
                <button className={user.button}>Follow</button>
            </div>
            <div className={user.container}>
                <div className={user.userInfoBlock}>
                    <h3>{props.name}</h3>
                    <h5>{props.status}</h5>
                </div>
                <div className={user.userLocationBlock}>
                    <h2>{props.location.country}, </h2>
                    <h3>{props.location.city} </h3>
                </div>
            </div>
        </div>
    );
}

export default User;