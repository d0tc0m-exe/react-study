let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello, this is post 1'}, 
                {id: 2, message: 'Hello, this is post 2'}],
            newTextData: 'example'
        },
        dialogsPage: {
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
        }
    },
    subscribe(observer) {
        store._callSubscriber = observer; // pattern observer
    },
    
    getState() {
        return store._state;
    },
    _callSubscriber() {
        console.log("State changed!");
    },

    dispatch(action) {
        if(action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                message: store._state.profilePage.newTextData,
            }
            store._state.profilePage.postData.push(newPost);
            store._state.profilePage.newTextData = '';
            store._callSubscriber(store._state);
        } else if(action.type === "UPDATE-NEW-POST-TEXT") {
            store._state.profilePage.newTextData = action.newText;
            store._callSubscriber(store._state);
        } else if(action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 5,
                text: store._state.dialogsPage.newMessageData,
            }
            store._state.dialogsPage.messagesData.push(newMessage);
            store._state.dialogsPage.newMessageData = '';
            store._callSubscriber(store._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            store._state.dialogsPage.newMessageData = action.newMessg;
            store._callSubscriber(store._state);
        }
    }
}


window.store = store;
export default store;