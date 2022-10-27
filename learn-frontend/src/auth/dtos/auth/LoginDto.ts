export interface LoginDto {
    token: string
    user: {
        id: string
        email: string
    }
}

