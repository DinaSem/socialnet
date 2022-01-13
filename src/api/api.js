import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '82fa877f-d7f6-43f6-aa9e-879e893eebb4'}
});
export const userAPI = {
    getUsers(currentPage = 10, pageSize = 1) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`unfollow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {

    getProfile(userId) {
        return instanse.get(`profile/` +userId)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` +userId)
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status:status})
    },
}

export const authAPI = {
    me(){
        return instanse.get(`auth/me`, {
        })
    }
}


