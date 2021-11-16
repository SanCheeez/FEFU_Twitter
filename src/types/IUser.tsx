import { IRegistration } from "./IRegistration";

export interface IUser {
    id: string;
    avatar: string;
    background: string;
    name: string;
    nickname: string;
    description: string;
    registration: IRegistration;
    in_reading: string;
    readers: string;
}