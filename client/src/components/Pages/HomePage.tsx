import React from "react";
import Layout from "../Layout/Layout";
import { TweetPost } from "../TweetPost/TweetPost";
import { Post } from "../Post/Post";

export const HomePage = (): JSX.Element => {
    return (
        <Layout title="Главная" >
            <TweetPost />
            <Post name='NoName' nickname='2N' date='7 ч' text='МАТАН МАТАН МАТАН МАТАН МАТАН МАТАН' comments={128} retweets={12} likes={55} is_liked={false} />
            <Post name='John Smith' nickname='John Smith' date='12 ч' text='Я снялся в фильме' comments={18} likes={5} is_liked={true} />
            <Post name='Elon Mask' nickname='SpaceX' date='25 минут' text='Мы выпустили новый автомобиль' comments={1128} retweets={1223} likes={1235} is_liked={true} />
        </Layout>
    );
}