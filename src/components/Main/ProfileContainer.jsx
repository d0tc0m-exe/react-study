import React from 'react'
import Main from './Main'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setUserProfile, toggleIsFetching} from '../../redux/reducers/profileReducer'
import Loader from '../Loader/Loader'
import load from '../../static/css/Loader/Loader.module.css'

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer);