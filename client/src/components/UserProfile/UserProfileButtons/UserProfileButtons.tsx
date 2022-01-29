import React, { useEffect, useState } from "react";
import { Post } from "../../Post/Post";
import axios from "axios";
import './UserProfileButtons.scss'

const api = axios.create({
    baseURL: "http://localhost:5001"
})

interface IPost {
    id?: string | String,
    avatar?: string | String,
    image?: string,
    date: string | String,
    text: string | String,
    name: string | String,
    nickname: string | String,
    comments?: number | Number,
    retweets?: number | Number,
    likes?: number | Number,
    is_liked: boolean | Boolean,
}

export const UserProfileButtons = (): JSX.Element => {
    const [currentButton, setCurrentButton] = useState<string>('tweets');
    const [posts, setPosts] = useState<Array<IPost>>([]);
    const allPosts = async () => {
        const response = await api.get('/post');
        setPosts(response.data);
    }
    useEffect(() => {
        allPosts();
    }, [])

    return (
        <div>
            {console.log(currentButton)}
            <div className="profile-buttons">
                <button onClick={() => setCurrentButton("tweets")} className={currentButton === "tweets" ? "profile-buttons__tweets profile-buttons__tweets_active" : "profile-buttons__tweets"}>Твиты</button>
                <button onClick={() => setCurrentButton("with_replies")} className={currentButton === "with_replies" ? "profile-buttons__tweets-with-replies profile-buttons__tweets-with-replies_active" : "profile-buttons__tweets-with-replies"}>Твиты и ответы</button>
                <button onClick={() => setCurrentButton("media")} className={currentButton === "media" ? "profile-buttons__media profile-buttons__media_active" : "profile-buttons__media"}>Медиа</button>
                <button onClick={() => setCurrentButton("likes")} className={currentButton === "likes" ? "profile-buttons__likes profile-buttons__likes_active" : "profile-buttons__likes"}>Нравится</button>
            </div>
            <div className="profile-posts">
                {(currentButton === "tweets" || currentButton === "with_replies") ? posts.map(post => <Post {...post} />) :
                    currentButton === "media" ? posts.filter(post => post.image !== "").map(post => <Post {...post} />) :
                        posts.filter(post => post.is_liked).map(post => <Post {...post} />)}
            </div>
        </div>
    )
}