import React from 'react';
import styless from './Dialogs.module.css';
import Contact from './Contact';
import Message from './Message';
import TextField from './TextField';

const Dialogs = (props) => {

    let messages = props.state.messagesData.map( m => <Message message={m.text} id={m.id} />);
    let contacts = props.state.contactData.map( c => <Contact name={c.name} id={c.id} />);

    return(
        <div className={styless.wrapper}>
            <div className={styless.block}>
                <div className={styless.contacts}>
                    { contacts }
                </div>
            </div>
            <div className={styless.container}>
                <TextField updateNewMessageText={ props.updateNewMessageText } addMessage={props.addMessage} />
                { messages }
            </div>
        </div>
    );
}

export default Dialogs;