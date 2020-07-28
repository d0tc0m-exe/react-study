var ADD_POST = 'ADD-POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hello, this is post 1'}, 
        {id: 2, message: 'Hello, this is post 2'}],
    newTextData: 'example'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newTextData,
            }
            state.postData.push(newPost);
            state.newTextData = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newTextData = action.newText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return { type: ADD_POST }
}

export let updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;