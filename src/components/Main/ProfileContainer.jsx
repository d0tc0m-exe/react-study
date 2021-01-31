import React from 'react'
import Main from './Main'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setUserProfile, toggleIsFetching} from '../../redux/reducers/profileReducer'
import Loader from '../Loader/Loader'
import load from '../../static/css/Loader/Loader.module.css'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        console.table(this.props.profile);
        return <>
            { this.props.isFetching ? <div className={load.loader}><Loader /></div> : null}
            <Main {...this.props } profile={this.props.profile} />
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching
});

let withUrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(withUrlDataComponent);