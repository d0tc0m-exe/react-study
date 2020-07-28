import { createStore, combineReducers } from "redux";
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import dialogsReducer from './reducers/dialogsReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;