import React from 'react';
import user from '../../static/css/Users/User.module.css';
import * as axios from 'axios';
import userImage from '../../static/images/user.png';

class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
                            return <span className={ this.props.currentPage === p && user.selectedPage} 
                                onClick={() => { this.onPageChanged(p); } }>{p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(
                        u => 
                            <div key={u.id} className={user.wrapper}>
                                <div className={user.block}>
                                    <div>
                                        <img className={user.profilePhoto} src={u.photos.small != null ? u.photos.small : userImage} alt=""/>
                                    </div>
                                    { u.following ? 
                                        <button onClick={ () => { this.props.unfollow(u.id) } } className={user.button}>Unfollow</button>
                                        : <button onClick={ () => { this.props.follow(u.id) } } className={user.button}>Follow</button>
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
}

export default Users;