import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../../static/css/Users/User.module.css';
import userImage from '../../static/images/user.png';
import {usersAPI} from '../../api/api'


let Users = (props) => {

    let pagesCount = Math.ceil(50 / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount;i++) {
        if(i <= 10) {
            pages.push(i);
        } else {
            break;
        }
    }
    
    return(
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={ props.currentPage === p && user.selectedPage} 
                            onClick={ () => { props.onPageChanged(p); } }>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(
                    u => 
                        <div key={u.id} className={user.wrapper}>
                            <div className={user.block}>
                                <div>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img className={user.profilePhoto} src={u.photos.small != null ? u.photos.small : userImage} alt=""/>
                                    </NavLink>
                                </div>
                                { u.followed ? 
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { 
                                        props.toggleFollowingProgress(true, u.id);
                                        usersAPI.unfollow(u.id).then(response => {
                                                if(response.data.resultCode === 0) {
                                                    props.unfollow(u.id) 
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });
                                    } } className={user.button}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                                        props.toggleFollowingProgress(true, u.id);
                                        usersAPI.follow(u.id).then(response => {
                                                if(response.data.resultCode === 0) {
                                                    props.unfollow(u.id) 
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });
                                    } } className={user.button}>Follow</button>
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