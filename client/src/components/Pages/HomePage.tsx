import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { TweetPost } from "../TweetPost/TweetPost";
import { Post } from "../Post/Post";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001"
});

interface IPost {
    avatar?: string,
    image?: string,
    date: string,
    text: string,
    name: string,
    nickname: string,
    comments?: number,
    retweets?: number,
    likes?: number,
    is_liked: boolean,
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