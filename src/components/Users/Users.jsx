import React from 'react';
import user from '../../static/css/Users/User.module.css';
import userImage from '../../static/images/user.png';


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