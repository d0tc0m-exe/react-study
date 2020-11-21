const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, following: false, name: 'Name 1', status: 'Hello, this is status 1', location: {city: 'Minsk', country: 'White Russia:3'}}, 
        // {id: 2, following: true, name: 'Name 2', status: 'Hello, this is status 2', location: {city: 'Kyiv', country: 'Ukraine'}},
        // {id: 3, following: true, name: 'Name 3', status: 'Hello, this is status 3', location: {city: 'Moscow', country: 'Russia'}}, 
        // {id: 4, following: true, name: 'Name 4', status: 'Hello, this is status 4', location: {city: 'Prague', country: 'Czech Republic'}}
    ],
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
            return { ...state, users: [...state.users, ...action.users]}
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

export default userReducer;