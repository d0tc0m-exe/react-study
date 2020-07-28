import React from 'react';
import ss from '../../static/css/Dialogs/TextField.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer';

const TextField = (props) => {
    
    const ref = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let txt = ref.current.value;
        props.dispatch(updateNewMessageTextActionCreator(txt));
    }

    return(
        <div className={ss.send}>
            <textarea onChange={ onMessageChange } ref={ ref } className={ss.inp}
                value={props.newMessageData} placeholder="Send Message"></textarea>
            <button onClick={ addMessage } className={ss.butn}>Search</button>
        </div>
    );
}

export default TextField;