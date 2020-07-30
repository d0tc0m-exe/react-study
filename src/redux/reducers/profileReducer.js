const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hello, this is post 1'}, 
        {id: 2, message: 'Hello, this is post 2'},
        {id: 3, message: 'Hello, this is post 3'}, 
        {id: 4, message: 'Hello, this is post 4'}
    ],
    newTextData: 'example'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newTextData,
            }
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newTextData = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.newTextData = action.newText;
            return stateCopy;
        }
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