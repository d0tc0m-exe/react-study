import React from 'react';
import user from '../../static/css/Users/User.module.css';
import * as axios from 'axios';
import userImage from '../../static/images/user.png';

let Users = (props) => {

    let getUsers = () => { 
        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(response => {
                props.setUsers(response.data.items);
            });
        }
    };

    return(
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(
                    u => 
                        <div key={u.id} className={user.wrapper}>
                            <div className={user.block}>
                                <div>
                                    <img className={user.profilePhoto} src={u.photos.small != null ? u.photos.small : userImage} alt=""/>
                                </div>
                                { u.following ? 
                                    <button onClick={ () => { props.unfollow(u.id) } } className={user.button}>Unfollow</button>
                                    : <button onClick={ () => { props.follow(u.id) } } className={user.button}>Follow</button>
                                }
                            </div>
                            <div className={user.container}>
                                <div className={user.userInfoBlock}>
                                    <h3>{u.name}</h3>
                                    <h5>{u.status}</h5>
                                </div>
                                <div className={user.userLocationBlock}>
                                    <h2>Developer is, </h2>
                                    <h3>lazy</h3>
                                </div>
                            </div>
                        </div>
                )
            }
        </div>
    );
}

export default Users;