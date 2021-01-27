import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '06e5810a-0410-4b5f-98c9-d18a1ae87df4',
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
}
