import mongoose, { Schema } from "mongoose";
import IUser from "../Interfaces/UserInterface";

const UserSchema: Schema = new Schema({
    id: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    background: { type: String, required: false },
    name: { type: String, required: true },
    nickname: { type: String, required: false },
    description: { type: String, required: false },
    month: { type: String, required: false, default: "октябрь" },
    year: { type: String, required: false, default: "2021" },
    in_reading: { type: String, default: "0" },
    readers: { type: String, default: "0" },
})

export default mongoose.model<IUser>('Users', UserSchema, 'Users');
