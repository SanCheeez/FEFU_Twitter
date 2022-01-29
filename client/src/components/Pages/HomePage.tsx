import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { TweetPost } from "../TweetPost/TweetPost";
import { Post } from "../Post/Post";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
});

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

export const HomePage = (): JSX.Element => {
    const [posts, setPosts] = useState<Array<IPost>>([]);
    const allPosts = async () => {
        const response = await api.get('/post');
        setPosts(response.data);
    }
    useEffect(() => {
        allPosts();
    }, [])
    return (
        <Layout title="Главная" >
            <TweetPost />
            {posts.map(post => <Post {...post} />)}
        </Layout>
    );
}