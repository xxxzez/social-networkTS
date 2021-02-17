export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string | null
}
export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType
    status: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
}

export type ProfilePhotosType = {
    small: string | null
    large: string | null
}
export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
export type AppReducerType = {
    initialized: boolean
}

export type LocationType = {
    city: string
    country: string
}
export type PhotosTypes = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    location: LocationType
    followed: boolean
    photos: PhotosTypes
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
