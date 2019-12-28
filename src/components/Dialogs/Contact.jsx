import React from 'react';
import contact from './Contact.module.css';
import {NavLink} from 'react-router-dom';

const Post = (props) => {
    let path = '/dialogs/' + props.id;

    return (
                <div className={contact.container}>
                        <div className={contact.image}></div>
                        <div className={contact.post}>
                        <NavLink className={contact.link} to={ path }><h4 className={contact.title}>{ props.name }</h4></NavLink>
                    </div>
                </div>
    );
}

export default Post;