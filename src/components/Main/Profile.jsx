import React from 'react';
import st from '../../static/css/Main/Profile.module.css';
import layout from '../../static/images/js.png';
import Loader from '../Loader/Loader';


const Profile = (props) => {
    if(!props.profile) {
        return <Loader />
    }
    
    return (
        <div className={st.wrapper}>
            <img className={st.layout} src={layout} alt="layout"></img>
            <div className={st.profile}>
            <img className={st.image} src={props.profile.photos.large} alt="Logo"></img>
                <div className={st.info}>
                    <span><h3>Name: {props.profile.fullName}</h3></span>
                    <span><h3>About: {props.profile.aboutMe}</h3></span>
                    <span><h3>Looking For A Job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</h3></span>
                    <span><h3>Looking For A Job Description: {props.profile.lookingForAJobDescription}</h3></span>
                </div>
            </div>
        </div>
    );
}

export default Profile;