const dialogsReducer = (state, action) => {
    var ADD_MESSAGE = 'ADD-MESSAGE';
    var UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                text: state.newMessageData,
            }
            state.messagesData.push(newMessage);
            state.newMessageData = '';
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageData = action.newMessg;
    }

    return state
}

export default dialogsReducer;