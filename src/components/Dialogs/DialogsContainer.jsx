import React from 'react';
import Dialogs from "./Dialogs";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/reducers/dialogsReducer';
import storeContext from '../../storeContext';

const DialogsContainer = () => {
    return <storeContext.Consumer> 
        {
        (store) => {
            let state = store.getState().dialogsPage;

            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }

            let updateNewMessageText = (body) => {
                store.dispatch(updateNewMessageTextActionCreator(body));
            }
            return <Dialogs updateNewMessageText={updateNewMessageText} addMessage={addMessage}
                        dialogsPage={state}/>
        }
    }
    </storeContext.Consumer>
}

export default DialogsContainer;