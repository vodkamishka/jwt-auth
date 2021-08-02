import {IUser} from "../IUSER";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}