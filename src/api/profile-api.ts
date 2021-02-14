import { PhotosTypes, ProfileType } from '../Types'
import { instance, APIResponseType } from './api'

type SavePhotoResponseDataType = {
    photos: PhotosTypes
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then((res) => res.data)
    },
    getStatus(userId: number) {
        return instance
            .get<string>(`profile/status/${userId}`)
            .then((res) => res.data)
    },
    updateStatus(status: string) {
        return instance
            .put<APIResponseType>(`profile/status`, { status: status })
            .then((res) => res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance
            .put<APIResponseType<SavePhotoResponseDataType>>(
                `profile/photo`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            .then((res) => res.data)
    },
    saveProfile(data: ProfileType) {
        return instance
            .put<APIResponseType>('profile', data)
            .then((res) => res.data)
    },
} 
