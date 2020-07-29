import React from 'react';
import Dialogs from "./Dialogs";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/reducers/dialogsReducer';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let updateNewMessageText = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }

    return <Dialogs updateNewMessageText={updateNewMessageText} addMessage={addMessage}
                    dialogsPage={state}/>
}

export default DialogsContainer;