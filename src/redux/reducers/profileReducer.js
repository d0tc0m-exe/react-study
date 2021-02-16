const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    postData: [
        {id: 1, message: 'Hello, this is post 1'}, 
        {id: 2, message: 'Hello, this is post 2'},
        {id: 3, message: 'Hello, this is post 3'}, 
        {id: 4, message: 'Hello, this is post 4'}
    ],
    newTextData: 'example',
    profile: null,
    isFetching: false,
    toggleFetchingProcess: []
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
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
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

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default profileReducer;