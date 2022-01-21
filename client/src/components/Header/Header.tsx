import React from "react";
import './Header.scss'
import { PopularTweets } from "../Icons/PopularTweets";

interface Props {
    title: string;
}

export const Header = ({ title }: Props): JSX.Element => {
    return (
        <div className="header">
            <div className="header__title">{title}</div>
            <div className="header__popular-tweets"><PopularTweets /></div>
        </div>
    )
}