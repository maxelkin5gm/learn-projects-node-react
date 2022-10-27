import {User, userState} from "../store/userState";

export async function fetchUsers() {
    userState.fetching()
    try {
        const users = await fetchApi() as User[]
        userState.fetchingSuccess(users)
    } catch (e) {
        (e instanceof Error) && userState.fetchingError(e.message)
    }
}


const dataUser: User[] = [
    {name: "Maxim", age: 22},
    {name: "Alena", age: 20},
    {name: "Denis", age: 18},
    {name: "Egor", age: 23},
    {name: "Stas", age: 30},
    {name: "Alex", age: 19},
]

function fetchApi() {
    return new Promise<User[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(dataUser)
            // reject(new Error("Ошибка доступа к серверу"))
        }, 1000)
    })

}