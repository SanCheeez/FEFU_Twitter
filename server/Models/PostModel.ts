import mongoose from "mongoose";
import IPost from "../Interfaces/PostInterface";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: { type: String, required: false, unique: true },
    avatar: { type: String, required: false, default: "./img/UserAvatars/user1.jpg" },
    image: { type: String, required: false, default: "" },
    date: { type: String, default: "1 янв." },
    text: { type: String, required: true, default: "Новый пост с каким-то текстом" },
    name: { type: String, required: true, default: "Cat Simon" },
    nickname: { type: String, required: false, default: "SuperCAt" },
    comments: { type: Number, default: 0 },
    retweets: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    is_liked: { type: Boolean, default: false },
})

export default mongoose.model<IPost>('Posts', PostSchema, 'Posts');
