import React from 'react';
import user from '../../static/css/Users/User.module.css';

let Users = (props) => {
    
    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, following: false, name: 'Name 1', status: 'Hello, this is status 1', location: {city: 'Minsk', country: 'White Russia:3'}}, 
            {id: 2, following: true, name: 'Name 2', status: 'Hello, this is status 2', location: {city: 'Kyiv', country: 'Ukraine'}},
            {id: 3, following: true, name: 'Name 3', status: 'Hello, this is status 3', location: {city: 'Moscow', country: 'Russia'}}, 
            {id: 4, following: true, name: 'Name 4', status: 'Hello, this is status 4', location: {city: 'Prague', country: 'Czech Republic'}}
        ]);
    }

    return(
        <div>
            {
                props.users.map(
                    u => 
                        <div key={u.id} className={user.wrapper}>
                            <div className={user.block}>
                                <div className={user.profilePhoto}></div>
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
                                    <h2>{u.location.country}, </h2>
                                    <h3>{u.location.city} </h3>
                                </div>
                            </div>
                        </div>
                )
            }
        </div>
    );
}

export default Users;