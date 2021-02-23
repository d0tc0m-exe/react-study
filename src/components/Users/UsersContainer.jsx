import Users from './Users';
import { connect } from 'react-redux';
import React from 'react';
import { follow, unfollow, setCurrentPage, getUsersThunkCreator } from '../../redux/reducers/usersReducer';
import Loader from '../Loader/Loader';
import load from '../../static/css/Users/User.module.css'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
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

export default connect(mapStateToProps,  { follow, unfollow, setCurrentPage, getUsersThunkCreator })(UsersContainer);
