import React from 'react';
import mes from './Message.module.css';

const Message = (props) => {
    return(
        <div className={mes.container}>
            <h4 className={mes.txt}>{ props.message }</h4>
        </div>
    );
}

export default Message;