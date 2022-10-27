export interface UserAuthData {
    email: string,
    password: string
}

export interface UserPersonalData {
    name: string,
}

export interface User extends UserPersonalData, UserAuthData {
    id: string
}
