import React from "react";
import Layout from "../Layout/Layout";
import { TweetPost } from "../TweetPost/TweetPost";
import { Post } from "../Post/Post";

export const HomePage = (): JSX.Element => {
    return (
        <Layout title="Главная" >
            <TweetPost />
            <Post name='NoName' nickname='2N' time='7 ч' text='МАТАН МАТАН МАТАН МАТАН МАТАН МАТАН' />
            <Post name='John Smith' nickname='John Smith' time='12 ч' text='Я снялся в фильме' />
            <Post name='Elon Mask' nickname='SpaceX' time='25 минут' text='Мы выпустили новый автомобиль' />
        </Layout>
    );
}