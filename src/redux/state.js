let rerenderEntireTree = ("Hello, this is text");

let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newTextData,
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newTextData = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newTextData = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        text: state.dialogsPage.newMessageData,
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageData = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMess) => {
    state.dialogsPage.newMessageData = newMess;
    rerenderEntireTree(state);
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer; // pattern observer
}

export default state;