import { createStore, combineReducers } from "redux";
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;