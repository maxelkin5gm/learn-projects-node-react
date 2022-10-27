import {User, usersSlice} from "../store/slices/usersSlice";
import {AppDispatch} from "../store/store";


export async function fetchUsers(dispatch: AppDispatch) {
    dispatch(usersSlice.actions.fetching())
    try {
        const users = await fetchApi() as User[]
        dispatch(usersSlice.actions.fetchingSuccess(users))
    } catch (e) {
        (e instanceof Error) && dispatch(usersSlice.actions.fetchingError(String(e)))
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