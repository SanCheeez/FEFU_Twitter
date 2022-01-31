import { Document } from "mongoose";

export default interface IUser extends Document {
    email: String,
    password: String,
    avatar: String,
    background: String,
    name: String,
    nickname: String,
    description: String,
    month: String,
    year: String,
    readers: String,
    in_reading: String,
}