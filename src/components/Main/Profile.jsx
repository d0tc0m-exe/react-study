import React from 'react';
import st from './Profile.module.css';
import logo from '../../static/images/logo.svg';
import layout from '../../static/images/js.png';


const Profile = () => {
    return (
        <div className={st.wrapper}>
            <img className={st.layout} src={layout} alt="layout"></img>
            <div className={st.profile}>
            <img className={st.image} src={logo} alt="Logo"></img>
                <div>
                    <span><h3>Name: Name Surname</h3></span>
                    <span><h3>Phone: 88005553535</h3></span>
                </div>
            </div>
        </div>
    );
}

export default Profile;