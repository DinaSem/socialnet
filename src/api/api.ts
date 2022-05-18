import axios from "axios";
import {PhotosType, UserType} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '82fa877f-d7f6-43f6-aa9e-879e893eebb4'}
});
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId:number) {
        return instance.post<ResponseType<{}>>(`follow/${userId}`)
    },
    unfollow(userId:number) {
        return instance.delete<ResponseType<{}>>(`unfollow/${userId}`)
    },
    getProfile(userId:number) {
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {

    getProfile(userId:number) {
        return instance.get(`profile/` +userId)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/` +userId)
    },
    updateStatus(status:string) {
        return instance.put(`profile/status`, {status:status})
    },
    updateProfilePhoto(imageObj:FileList) {
        let filePhoto = new FormData()
        filePhoto.append("image", imageObj[0])
        return instance.put<ResponseType<{photos: PhotosType}>>("profile/photo", filePhoto, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export const authAPI = {
    me(){
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>(`auth/me`)
    },
    login(email:string, password:string, rememberMe = false){
        return instance.post<ResponseType<{ userId: number }>>(`login/me`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete<ResponseType<{}>>(`login/login`)
    }
}




export type ResponseType<T> = {
    resultCode: number,
    messages: string[],
    data: T
}

export type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}


