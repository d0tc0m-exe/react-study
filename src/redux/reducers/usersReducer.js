const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    isFetching: false
};

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => { 
                    if(users.id === action.userId) {
                        return {...users, following: true}
                    }
                    return users
                }) 
            } 
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(users => { 
                    if(users.id === action.userId) {
                        return {...users, following: false}
                    }
                    return users
                }) 
            }
        case SET_USERS: 
            return { ...state, users: action.users}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const toggleIsFetchingAC = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default userReducer;