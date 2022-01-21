import mongoose from "mongoose";
import IPost from "../Interfaces/PostInterface";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: { type: String, required: false },
    avatar: { type: String, required: false },
    image: { type: String, required: false },
    date: { type: String, default: "ноябрь 2021" },
    text: { type: String, required: true, default: "Новый пост с каким-то текстом" },
    name: { type: String, required: true, default: "Cat Simon" },
    nickname: { type: String, required: false },
    comments: { type: Number, default: 0 },
    retweets: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    is_liked: { type: Boolean, default: false },
})

export default mongoose.model<IPost>('Posts', PostSchema, 'Posts');
