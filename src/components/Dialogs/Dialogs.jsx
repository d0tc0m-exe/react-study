import React from 'react';
import ss from '../../static/css/Dialogs/Dialogs.module.css';
import Message from './Messages/Message';
import Contact from './Contacts/Contact';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.contactData.map( d => <Contact name={d.name} id={d.id} />  );
    let messagesElements = state.messagesData.map( m => <Message message={m.text} /> );
    let newMessageBody = state.newMessageData;

    let onSendMessageClick = () => {
        props.addMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    }

    console.log(state.messagesData); 

    return (
        <div className={ss.wrapper}>
            <div className={ss.block}>
                <div className={ss.contacts}>
                    { dialogsElements }
                </div>
            </div>
            <div className={ss.container}>
                <div className={ss.messagesContainer}>
                    { messagesElements }
                </div>
                <div className={ss.inp}>
                    <div>
                        <textarea className={ss.send} value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button className={ss.butn} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;