export interface RegistrationDto {
    token: string
    user: {
        id: string
        email: string
        name: string
    }
}

