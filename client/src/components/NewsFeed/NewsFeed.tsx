import React from 'react'
import './NewsFeed.scss'
import { Header } from "../Header/Header"

type Props = {
    title: string;
    children: React.ReactNode
}

export const NewsFeed = (props: Props): JSX.Element => {
    return (
        <main className="news-feed">
            <Header title={props.title} />
            <div>{props.children}</div>
        </main>
    );
}
