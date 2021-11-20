import React from "react"
import './Post.scss'
import image from '../../img/Klevch.jpg'
import cat from '../../img/Cat.jpg'
import { DotsMore } from '../Icons/DotsMore'
import { PostComment } from '../Icons/PostComment'
import { PostRetweet } from '../Icons/PostRetweet'
import { PostLike } from '../Icons/PostLike'
import { PostShare } from '../Icons/PostShare'

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
                        <div className="main__header_nickname">@{nickname} - {time}</div>
                    </div>
                    <div className="main__header_dots"><DotsMore /></div>
                </div>
                <p className="main__text">{text}</p>
                <div className='main__photo'><img src={image} alt="" /></div>
                <div className="main__actions actions">
                    <div className="actions__item"><PostComment /></div>
                    <div className="actions__item"><PostRetweet /></div>
                    <div className="actions__item"><PostLike /></div>
                    <div className="actions__item"><PostShare /></div>
                </div>
            </div>
        </div>
    );
}
