import { GetItemsType, instance } from './api'

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance
            .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    },
    follow(userId: number) {
        return instance
            .post<ResponseType>(`follow/${userId}`)
            .then((res) => res.data)
    },
    unfollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then((res) => res.data) as Promise<ResponseType>
    },
}
