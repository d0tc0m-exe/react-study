import React from 'react';
import contact from '../../../static/css/Dialogs/Contact.module.css';
import {NavLink} from 'react-router-dom';

const Post = (props) => {
    let path = '/dialogs/' + props.id;

    return (
                <div className={contact.container}>
                        <NavLink className={contact.link} to={ path }><h4 className={contact.title}>{ props.name }</h4></NavLink>
                </div>
    );
}

export default Post;