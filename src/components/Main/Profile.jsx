import React from 'react';
import st from './Profile.module.css';
import logo from './logo.svg';
import layout from './js.png';


const Profile = () => {
    return (
        <div className={st.wrapper}>
            <img className={st.layout} src={layout} alt="layout"></img>
            <div className={st.profile}>
            <img className={st.image} src={logo} alt="image"></img>
                <div>
                    <span><h3>Name: Ivan Diakov</h3></span>
                    <span><h3>Age: 12</h3></span>
                    <span><h3>Phone: 88005553535</h3></span>
                </div>
            </div>
        </div>
    );
}

export default Profile;