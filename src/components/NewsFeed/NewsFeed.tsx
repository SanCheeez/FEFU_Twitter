import React from "react"
import { Icons } from '../Icons/Icons'
import './NewsFeed.scss'
import { TweetPost } from "../TweetPost/TweetPost"
import { Post } from '../Post/Post'
import { UserProfile } from "../UserProfile/UserProfile"

export const NewsFeed = (): JSX.Element => {
    return (
        <main className="news-feed">
            <div className="news-feed__header">
                <div className="news-feed__title">Главная</div>
                <div className="news-feed__popular-tweets"><Icons id='popular_tweets' /></div>
            </div>
            <UserProfile />
            <div className="news-feed__tweet">
                <TweetPost />
            </div>
            <ul className="news-feed__posts">
                <li className="post">
                    <Post name='NoName' nickname='2N' time='12 ч' text='Hello, low skill students!!!' />
                </li>
            </ul>
        </main>
    );
}
