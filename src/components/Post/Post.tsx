import React from "react"
import './Post.scss'
import image from '../../img/Klevch.jpg'
import cat from '../../img/Cat.jpg'
import { Icons } from "../Icons/Icons";
interface Props {
    name: string;
    nickname: string;
    time: string;
    text: string;
}

export const Post = ({ name, nickname, time, text }: Props) => {
    return (
        <div className="post">
            <div className="post__photo"><img src={cat} alt="" /></div>
            <div className="post__main main">
                <div className="main__header">
                    <div className="names">
                        <div className="main__header_name">{name}</div>
                        <div className="main__header_nickname">{nickname} * {time}</div>
                    </div>
                    <div className="main__header_dots"><Icons id='dots_more' /></div>
                </div>
                <p className="main__text">{text}</p>
                <div className='main__photo'><img src={image} alt="" /></div>
                <div className="main__actions actions">
                    <div className="actions__item"><Icons id='post__comment' /></div>
                    <div className="actions__item"><Icons id='post__retweet' /></div>
                    <div className="actions__item"><Icons id='post__like' /></div>
                    <div className="actions__item"><Icons id='post__share' /></div>
                </div>
            </div>
        </div>
    );
}
