import {User, UserAuthData, UserPersonalData} from "../models/User";

export class Database {
    users: User[] = []

    async createUser(userData: UserAuthData & UserPersonalData) {
        const user: User = {
            id: this.users.length.toString(),
            ...userData
        }
        this.users.push(user)
        return user
    }

    async getAllUsers() {
        return this.users
    }

    async getUser(id: string): Promise<User | null> {
        return this.users.find((user) => user.id === id) || null
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find((user) => user.email === email) || null
    }

}