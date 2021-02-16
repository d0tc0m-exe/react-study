import Users from './Users';
import { connect } from 'react-redux';
import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowingProgress } from '../../redux/reducers/usersReducer';
import Loader from '../Loader/Loader';
import load from '../../static/css/Users/User.module.css'
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
        });
    }

    render() {
        return <>
            { this.props.isFetching ? <div className={load.loader}><Loader /></div> : null}
            <Users
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress 
    }
}

export default connect(mapStateToProps,  { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowingProgress })(UsersContainer);
