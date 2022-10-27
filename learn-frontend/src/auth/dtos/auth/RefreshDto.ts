import {User} from "../../models/User";

export interface RefreshDto {
    token: string,
    user: User
}