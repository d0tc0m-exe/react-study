var ADD_MESSAGE = 'ADD-MESSAGE';
var UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    contactData: [
        {id: 1, name: 'Andrii'},
        {id: 2, name: 'Kolia'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Max'},
        {id: 6, name: 'Eugene'},
        {id: 7, name: 'Daniil'},
        {id: 8, name: 'Vania'},
        {id: 9, name: 'Max'},
        {id: 10, name: 'Eugene'},
        {id: 11, name: 'Daniil'},
        {id: 12, name: 'Vania'},
        {id: 13, name: 'Max'},
    ],
    messagesData: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How it\'s going'},
        {id: 3, text: 'Hello'},
        {id: 4, text: 'Privet'}
    ],
    newMessageData: 'example'
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                text: state.newMessageData,
            }
            state.messagesData.push(newMessage);
            state.newMessageData = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageData = action.newMessg;
            return state;
        default:
            return state;
    }
}

export let addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}

export let updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessg: text }
}

export default dialogsReducer;