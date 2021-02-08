import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../../static/css/Users/User.module.css';
import userImage from '../../static/images/user.png';
import * as axios from 'axios';


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
                                    <button onClick={ () => { 
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers : {
                                                "API-KEY": "e01d5917-dfb5-4c34-8968-768fc95f0fae"
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode === 0) {
                                                    props.unfollow(u.id) 
                                                }
                                            });
                                    } } className={user.button}>Unfollow</button>
                                    : <button onClick={ () => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers : {
                                                "API-KEY": "e01d5917-dfb5-4c34-8968-768fc95f0fae"
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode === 0) {
                                                    props.unfollow(u.id) 
                                                }
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