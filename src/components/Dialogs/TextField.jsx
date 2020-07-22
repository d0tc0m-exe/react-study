import React from 'react';
import ss from './TextField.module.css';

const TextField = (props) => {
    
    const ref = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: "ADD-MESSAGE" });
    }

    let onMessageChange = () => {
        let txt = ref.current.value;
        props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessg: txt });
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