import {makeAutoObservable} from "mobx";

export interface User {
    name: string,
    age: number
}

class UserState {
    users: User[] = []
    isLoading = false
    error = ""

    constructor() {
        makeAutoObservable(this)
    }

    fetching() {
        this.error = ""
        this.isLoading = true
    }

    fetchingSuccess(users: User[]) {
        this.users = users
        this.isLoading = false
    }

    fetchingError(error : string) {
        this.isLoading = false
        this.error = error
    }


}

export const userState = new UserState()