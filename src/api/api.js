import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        "API-KEY": "e01d5917-dfb5-4c34-8968-768fc95f0fae"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    }
}