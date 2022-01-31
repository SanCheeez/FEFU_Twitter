import mongoose, { Schema } from "mongoose";
import IUser from "../Interfaces/UserInterface";

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false, default: "" },
    background: { type: String, required: false, default: "" },
    name: { type: String, required: true },
    nickname: { type: String, required: false, default: "NewUser" },
    description: { type: String, required: false, default: "Что-то о себе, но пока пусто" },
    month: { type: String, required: false, default: "октябрь" },
    year: { type: String, required: false, default: "2021" },
    readers: { type: String, default: "0" },
    in_reading: { type: String, default: "0" },
})

export default mongoose.model<IUser>('Users', UserSchema, 'Users');
