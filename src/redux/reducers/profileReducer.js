const profileReducer = (state, action) => {
    var ADD_POST = 'ADD-POST';
    var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newTextData,
            }
            state.postData.push(newPost);
            state.newTextData = '';
        case UPDATE_NEW_POST_TEXT:
            state.newTextData = action.newText;
    }

    return state;
}

export default profileReducer;