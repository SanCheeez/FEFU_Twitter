import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Post } from "../Post/Post";
import { SearchbarHeader } from "../Searchbar/SearchbarHeader/SearchbarHeader";
import { ActualThemes } from "../SidebarRight/ActualThemes/ActualThemes";

const api = axios.create({
    baseURL: "http://localhost:5001"
})

interface IPost {
    id?: string,
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

export const ExplorePage = (): JSX.Element => {
    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [text, setText] = useState<string>('');
    const allPosts = async () => {
        const response = await api.get(`/search?text=${text}`);
        setPosts(response.data);
    }
    useEffect(() => {
        allPosts();
    }, [text])
    return (
        <Layout title="Актуальное" set_actual_and_searchbar={false}>
            <SearchbarHeader onChange={() => setText(document.getElementsByTagName("input")[0].value)} />
            <ActualThemes is_explore={true} />
            {posts.map(post => {
                return <Post {...post} />;
            })}
        </Layout>
    );
}