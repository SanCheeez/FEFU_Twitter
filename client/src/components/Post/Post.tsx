import React from "react"
import './Post.scss'
import default_image from '../../img/common_picture.png'
import cat from '../../img/Cat.jpg'
import { DotsMore } from '../Icons/DotsMore'
import { PostComment } from '../Icons/PostComment'
import { PostRetweet } from '../Icons/PostRetweet'
import { PostLike } from '../Icons/PostLike'
import { PostShare } from '../Icons/PostShare'

interface Props {
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

export const Post = (props: Props) => {
    return (
        <div className="post">
            <div className="post__photo"><img src={cat} alt="" /></div>
            <div className="post__main main">
                <div className="main__header">
                    <div className="names">
                        <div className="main__header_name">{props.name}</div>
                        <div className="main__header_nickname">@{props.nickname} - {props.date}</div>
                    </div>
                    <div className="main__header_dots"><DotsMore /></div>
                </div>
                <p className="main__text">{props.text}</p>
                <div className='main__photo'><img src={props.image !== "" ? (props.image)?.toString() : default_image} alt="Картинка не загрузилась" /></div>
                <div className="main__actions actions">
                    <div className="actions__container">
                        <div className="actions__item actions__item_comment"><PostComment /></div>
                        <span className="actions__numbers">{props.comments !== (null || undefined) ? props.comments : 0}</span>
                    </div>
                    <div className="actions__container">
                        <div className="actions__item actions__item_retweet"><PostRetweet /></div>
                        <span className="actions__numbers">{props.retweets !== (null || undefined) ? props.retweets : 0}</span>
                    </div>
                    <div className="actions__container">
                        <div className={props.is_liked ? "actions__item actions__item_like actions__item_liked" : "actions__item actions__item_like"}><PostLike /></div>
                        <span className="actions__numbers">{props.likes !== (null || undefined) ? props.likes : 0}</span>
                    </div>
                    <div className="actions__item actions__item_share"><PostShare /></div>
                </div>
            </div>
        </div>
    );
}
