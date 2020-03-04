import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App updateNewPostText={ updateNewPostText } state={state} />
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
